import React, { useState, useEffect } from 'react';
import { Block, BlockTitle, Page, f7, Navbar } from 'framework7-react';
import { Toast } from 'react-bootstrap';
import { onMessageListener } from '../firebase-config/firebase-init';
import { getTokens } from '../firebase-config/firebase-init';

const Notifications = () => {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({ title: '', body: '' });
    const [tokenFound, setTokenFound] = useState(false);
    getTokens(setTokenFound);

    onMessageListener().then((payload) => {
        setShow(true);
        setNotification({ title: payload.notification.title, body: payload.notification.body })
        console.log(payload);

    }).catch(err => console.log(err))


    return (
        <Page name='notifications'>
            <Navbar title="Notification" backLink="Back" />
            <BlockTitle>
                {tokenFound ?
                    (<p>
                        Permission Granted
                    </p>) :
                    (<p>
                        Permission Denied
                    </p>)}
            </BlockTitle>
            <Block>
                <Toast onClose={() => setShow(false)} show={show} delay={3000}  animation style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    minWidth: 200
                }}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{notification.title}</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{notification.body}</Toast.Body>
                </Toast>
            </Block>
        </Page>
    )
}

export default Notifications