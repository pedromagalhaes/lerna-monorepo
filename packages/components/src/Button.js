import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

const ButtonComponent = ({className, wider, ...props}) => <StyledButton className={className} {...props} />;

const StyledButton = styled(Button)`
    &.ui.primary {
        border-radius: 0.142em;
        border: 0.1429em solid #1d2327;
        box-shadow: 0px 0em 0px 0px #1d2327 inset;
        background-color: #1d2327;
        color: #ffffff;
        &:hover {
            box-shadow: 0px 4px 16px 0px rgb(29 35 39 / 12%);
            background-color: #444749;
            border: 0.1429em solid #444749;
            color: #ffffff;
            text-shadow: none;
        }
    }
    &.ui.secondary {
        border: 0.143em solid #1d2327;
        box-shadow: 0px 0em 0px 0px #1d2327 inset;
        color: #1d2327;
        background-image: none;
        background: #fff;
        border-radius: 0.142em;
        &:hover {
            background-color: #f7f7f7;
            box-shadow: 0px 4px 16px 0px rgb(29 35 39 / 6%);
            color: #1d2327;
            text-shadow: none;
        }
    }
    &.ui.button {
        min-width: 186px;
        text-shadow: none;
        margin: 0px;
        padding: 0px 24px;
        text-transform: uppercase;
        font-family: 'Art Basel Text', 'Helvetica Neue', Arial, Helvetica, sans-serif;
        height: 48px;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 0;
    }
`;

ButtonComponent.propTypes = {
    disabled: PropTypes.bool.isRequired
};

ButtonComponent.defaultProps = {
    disabled: false
};

export default ButtonComponent;
