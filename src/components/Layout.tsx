import { RouteProps } from "react-router";
/* If the above error is preventing a successful build,
 * just import from "react-router".
 * It doesn't convey as clearly that you're importing a
 * type declaration instead of the library, but it should
 * make TS happy
 */

interface ILayoutProps {
    location: RouteProps["location"];
    children?: RouteProps["children"];
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    return (
        <div>
            <p>Path: {props.location?.pathname}</p>
            {props.children}
        </div>
    );
};

export { Layout };
