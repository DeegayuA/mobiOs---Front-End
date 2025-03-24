interface LoginFormProps extends React.ComponentProps<"div"> {
    portalType: "Admin" | "Student";
}
export declare function LoginForm({ portalType, className, ...props }: LoginFormProps): import("react/jsx-runtime").JSX.Element;
export {};
