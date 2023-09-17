import React, { useState } from 'react';
import { labels } from 'views/labels';
import ListItem from 'components/atoms/ListItem/ListItem';
import NavBackground from 'components/atoms/NavBackground/NavBackground';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import NavList from 'components/atoms/NavList/NavList';
import BurgerBarsContainer from 'components/molecules/BurgerBarsContainer/BurgerBarsContainer';
import { NavigationContainer, NavigationWrapper } from './Navigation.styles';

const Navigation = (): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);
    const handleListItemClick = (): void => {
        setIsChecked(!isChecked);
    };

    return (
        <NavigationContainer>
            <BurgerBarsContainer checked={isChecked} setIsChecked={handleListItemClick} />
            <NavBackground />
            <NavigationWrapper>
                <NavList>
                    <ListItem>
                        <NavigationLink setIsChecked={handleListItemClick} href={labels.navigationList.aboutUsSection}>
                            {labels.navigationList.aboutUs}
                        </NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink setIsChecked={handleListItemClick} href={labels.navigationList.productsSection}>
                            {labels.navigationList.products}
                        </NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink
                            setIsChecked={handleListItemClick}
                            href={labels.navigationList.forwardingSection}
                        >
                            {labels.navigationList.forwarding}
                        </NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink
                            setIsChecked={handleListItemClick}
                            href={labels.navigationList.cooperationSection}
                        >
                            {labels.navigationList.cooperation}
                        </NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink
                            setIsChecked={handleListItemClick}
                            href={labels.navigationList.writeToUsSection}
                        >
                            {labels.navigationList.writeToUs}
                        </NavigationLink>
                    </ListItem>
                </NavList>
            </NavigationWrapper>
        </NavigationContainer>
    );
};

export default Navigation;
