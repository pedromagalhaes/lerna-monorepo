import React from 'react';

import Button from './Button';

export default {
    component: Button,
    title: 'Design System/Button'
};

/* How the button is called in SUI documentation */
export const primary = () => <Button primary>Primary Button</Button>;
export const secondary = () => <Button secondary>Secondary Button</Button>;

/* How we currently call the SUI Button, with a prop that doesnt exist in SUI Button (e.g. wider) */
/* Note: For backwards compatibility, we should still support it in UI Kit */
export const widerAsProp = () => <Button wider>Wider prop</Button>;

/* New approach for UI Kit */
export const widerAsClass = () => <Button className="wider">Wider class</Button>;

/* Other approach with native elements */
export const widerAsNative = () => <button className="ui button wider">Wider native</button>;
