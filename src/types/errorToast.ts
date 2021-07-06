export type errorToast = {
    id: string;
    duration?: number;
    title: string;
    message?: string;
    variant?: `danger` | `info` | `warning` | `notice`;
    type?: `temporary` | `static`;
    customColor?: string;
}