import * as React from 'react';
import {Redirect, Route, RouteProps, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import {Layout} from '../components/layout';
import {BrowserMain, CatDetails} from '../pages';
import {Routes} from '../constants/index';

interface IPublicRouteProps extends RouteProps {
    path: string;
    name: string;
    component: any;
    exact?: boolean;
}

const PublicRoute = (props: IPublicRouteProps) => {
    const {component: Component, ...rest} = props;

    return (
        <Route
            {...rest}
            render={(routeProps: RouteProps) =>
                <Layout name={rest.name}>
                    <Component {...routeProps} />
                </Layout>
            }
        />
    );
};

const AppNavigator: React.FC<RouteComponentProps> = ({location}) => {

    return (
        <React.Fragment>
            <Switch location={location}>
                <PublicRoute exact path={Routes.browserDefault} name="browserDefault" component={BrowserMain}/>
                <PublicRoute exact path={Routes.catDetails} name="catDetails" component={CatDetails}/>
                <Redirect to={Routes.browserDefault}/>;
            </Switch>
        </React.Fragment>
    );
};

export default withRouter(AppNavigator);
