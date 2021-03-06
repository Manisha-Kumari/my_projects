/**
 * Created by manisha on 1/4/18.
 */
import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}
    </button>
);

export default button;