import React from "react";
import {
  BiCalendar,
  BiDollar,
  BiGlobeAlt,
  BiInfoCircle,
  BiPhone,
  BiPlus,
  BiTime,
  BiTrophy,
  BiUser,
} from "react-icons/bi";
import { IoCaretDown } from "react-icons/io5";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import Card from "./containers/Card";
import Dropdown from "./Dropdown";
import Input from "./Input";
import InputArea from "./InputArea";
import InputSelect from "./InputSelect";
import { ranks, regions } from "./LobbyCard";
import PrivacySetting from "./PrivacySetting";
import { MDHeader, SMParagraph } from "./Typography";

export interface onCreateInputs {
  name: string;
  description: string;
  rules: string;
  coverImageUrl?: string;
}

export interface createLobbyCardInterface {
  onCreate: (data: onCreateInputs) => Promise<boolean> | Promise<null>;
  onCancel: () => void;
}

const CreateLobbyCard: React.FC<createLobbyCardInterface> = ({
  onCreate,
  onCancel,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  return (
    <Card className={`flex flex-col w-full p-3 shadow-2xl`}>
      <form className={`w-full flex flex-col`}>
        <div
          className={`flex flex-row justify-between items-center border-b-2 pb-4 border-${theme}-default`}
        >
          <div>
            <MDHeader>Create Lobby</MDHeader>
            <SMParagraph className={`text-${theme}-box-box4`}>
              Fill in the fields to create a lobby
            </SMParagraph>
          </div>
          <div>
            <Dropdown
              anchor={
                <PrivacySetting
                  label={`Public`}
                  className={`md:w-40`}
                  iconRight={<IoCaretDown />}
                  onClick={() => {}}
                />
              }
            >
              <PrivacySetting
                label={`Friends Only`}
                level={`friends`}
                onClick={(level) => console.log(level)}
              />
              <PrivacySetting
                label={`Invite Only`}
                level={`invite`}
                onClick={(level) => console.log(level)}
              />
              <PrivacySetting
                label={`Password`}
                level={`password`}
                onClick={(level) => console.log(level)}
              />
              <PrivacySetting
                label={`Public`}
                level={`public`}
                onClick={(level) => console.log(level)}
              />
            </Dropdown>
          </div>
        </div>
        <Input
          id={`name`}
          name={`name`}
          className={`mt-2`}
          label={`Name`}
          stretch={true}
          placeholder={`Lobby Name`}
        />
        <InputArea
          rows={3}
          id={`description`}
          name={`description`}
          className={`mt-4`}
          label={`Description`}
          stretch={true}
          placeholder={`Describe the lobby or anything else about it here`}
          style={{ whiteSpace: `pre-wrap` }}
        />
        <InputArea
          rows={6}
          id={`rules`}
          name={`rules`}
          className={`mt-4`}
          label={`Rules`}
          stretch={true}
          placeholder={`Outline the rules of the lobby here`}
          style={{ whiteSpace: `pre-wrap` }}
        />
        <div className={`mt-4`}>
          <Button
            onClick={() => console.log(`Add Cover Image`)}
            type={`button`}
            stretch={true}
            variant={`primary`}
            iconRight={<BiPlus />}
          >
            Add Cover Image
          </Button>
        </div>
        <div className={`mt-4`}>
          <MDHeader className={`border-b-2 border-${theme}-default`}>
            Prize Details
          </MDHeader>
          <div className={`grid grid-cols-6 gap-4 mt-2`}>
            <div className={`col-span-3`}>
              <Input
                id={`prize`}
                name={`prize`}
                label={`Prize`}
                stretch={true}
                placeholder={`Prize Name`}
              />
            </div>
            <div className={`col-span-3`}>
              <Input
                iconLeft={<BiDollar />}
                id={`prizeAmount`}
                name={`prizeAmount`}
                label={`Prize Amount`}
                stretch={true}
                min={0}
                max={10000}
                placeholder={`100.00`}
                type={`number`}
              />
            </div>
            <div className={`col-span-6`}>
              <InputArea
                rows={3}
                id={`prizeDescription`}
                name={`prizeDescription`}
                label={`Prize Description`}
                stretch={true}
                placeholder={`Describe the prize or anything else about fulfillment`}
              />
            </div>
          </div>
        </div>
        <div className={`mt-4`}>
          <MDHeader className={`border-b-2 border-${theme}-default`}>
            Planning
          </MDHeader>
          <div className={`grid grid-cols-8 gap-4 mt-2`}>
            <div className={`col-span-8 md:col-span-4 xl:col-span-2`}>
              <Input
                type={`date`}
                id={`startDate`}
                name={`startDate`}
                label={`Start Date`}
                stretch={true}
                iconLeft={<BiCalendar />}
              />
            </div>
            <div className={`col-span-8 md:col-span-4 xl:col-span-2`}>
              <Input
                iconLeft={<BiTime />}
                id={`startTime`}
                name={`startTime`}
                label={`Start Time`}
                stretch={true}
                type={`time`}
              />
            </div>

            <div className={`col-span-8 sm:col-span-4`}>
              <Input
                iconLeft={<BiUser />}
                id={`maxPlayers`}
                name={`maxPlayers`}
                label={`Max Players`}
                placeholder={`2 to 512 Players`}
                stretch={true}
                type={`number`}
                min={2}
                max={512}
              />
            </div>
            <div className={`col-span-8 sm:col-span-4`}>
              <InputSelect
                iconLeft={<BiGlobeAlt />}
                id={`region`}
                name={`region`}
                label={`Region`}
                stretch={true}
              >
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`NA1`}
                >
                  {regions.NA}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`EUW1`}
                >
                  {regions.EUW}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`EUN1`}
                >
                  {regions.EUNE}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`LA1`}
                >
                  {regions.LAN}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`LA2`}
                >
                  {regions.LAS}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`BR1`}
                >
                  {regions.BR}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`OCE`}
                >
                  {regions.OCE}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`RU1`}
                >
                  {regions.RU}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`TR1`}
                >
                  {regions.TR}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`JP1`}
                >
                  {regions.JP}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`KR`}
                >
                  {regions.KR}
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`PBE`}
                >
                  {regions.PBE}
                </option>
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`ANY`}
                >
                  {regions.ANY}
                </option>
              </InputSelect>
            </div>
            <div className={`col-span-8 sm:col-span-4`}>
              <InputSelect
                iconLeft={<BiTrophy />}
                id={`rank`}
                name={`rank`}
                label={`Rank`}
                stretch={true}
              >
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`any`}
                >
                  {ranks.any}
                </option>
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`iron`}
                >
                  {ranks.iron}
                </option>
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`bronze`}
                >
                  {ranks.bronze}
                </option>
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`silver`}
                >
                  {ranks.silver}
                </option>
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`gold`}
                >
                  {ranks.gold}
                </option>
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`platinum`}
                >
                  {ranks.platinum}
                </option>
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`diamond`}
                >
                  {ranks.diamond}
                </option>
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`master`}
                >
                  {ranks.master}
                </option>
              </InputSelect>
            </div>
          </div>
        </div>
        <div className={`mt-4`}>
          <MDHeader className={`border-b-2 border-${theme}-default`}>
            Contact
          </MDHeader>
          <div className={`grid grid-cols-8 gap-4 mt-2`}>
            <div className={`col-span-8 md:col-span-2`}>
              <InputSelect
                iconLeft={<BiPhone />}
                id={`contactMethod`}
                name={`contactMethod`}
                label={`Contact Method`}
                stretch={true}
              >
                <option
                  className={`bg-${theme}-box-box2 focus:bg-${theme}-box-box2`}
                  value={`discord`}
                >
                  Discord
                </option>
                <option
                  className={`bg-${theme}-box-box2 p-10 focus:bg-${theme}-box-box2`}
                  value={`email`}
                >
                  Email
                </option>
              </InputSelect>
            </div>
            <div className={`col-span-8 md:col-span-6`}>
              <Input
                iconLeft={<BiInfoCircle />}
                id={`contactInfo`}
                name={`contactInfo`}
                label={`Contact Info`}
                stretch={true}
                placeholder={`Discord invite or email address`}
              />
            </div>
          </div>
        </div>
        <div className={`mt-4 flex flex-row justify-end`}>
          <Button
            type={`button`}
            onClick={onCancel}
            variant={`text`}
            className={`mr-2`}
          >
            Cancel
          </Button>
          <Button type={`submit`} variant={`primary`}>
            Create
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateLobbyCard;
