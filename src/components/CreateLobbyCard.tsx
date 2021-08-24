import React from "react";
import { BiCalendar, BiDollar, BiPlus, BiTime } from "react-icons/bi";
import { IoCaretDown } from "react-icons/io5";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import Card from "./containers/Card";
import DatePickerInput from "./DatePickerInput";
import Dropdown from "./Dropdown";
import Input from "./Input";
import InputArea from "./InputArea";
import PrivacySetting from "./PrivacySetting";
import { MDHeader, SMParagraph } from "./Typography";

export interface createLobbyCardInterface {
  onCreate: (
    name: string,
    description: string,
    rules: string,
    coverImageUrl?: string
  ) => Promise<boolean> | Promise<null>;
}

const CreateLobbyCard: React.FC<createLobbyCardInterface> = ({ onCreate }) => {
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
                />
              }
            >
              <PrivacySetting label={`Friends Only`} level={`friends`} />
              <PrivacySetting label={`Invite Only`} level={`invite`} />
              <PrivacySetting label={`Password`} level={`password`} />
              <PrivacySetting label={`Public`} level={`public`} />
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
        />
        <InputArea
          rows={6}
          id={`rules`}
          name={`rules`}
          className={`mt-4`}
          label={`Rules`}
          stretch={true}
          placeholder={`Outline the rules of the lobby here`}
        />
        <div className={`mt-4`}>
          <Button stretch={true} variant={`primary`} iconRight={<BiPlus />}>
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
            <div className={`col-span-2`}>
              <Input
                type={`date`}
                id={`startDate`}
                name={`startDate`}
                label={`Start Date`}
                stretch={true}
                iconLeft={<BiCalendar />}
              />
            </div>
            <div className={`col-span-2`}>
              <Input
                type={`date`}
                id={`startDate`}
                name={`startDate`}
                label={`End Date`}
                stretch={true}
                iconLeft={<BiCalendar />}
              />
            </div>
            <div className={`col-span-4`}>
              <Input
                iconLeft={<BiTime />}
                id={`startTime`}
                name={`startTime`}
                label={`Start Time`}
                stretch={true}
                type={`time`}
              />
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default CreateLobbyCard;
