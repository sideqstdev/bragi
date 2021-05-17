export type errorToast = {
    id: string;
    duration?: number;
    message: string;
    variant?: "danger" | "info" | "warning" | "notice";
}