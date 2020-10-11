import React from 'react'
import './Navigation.css'
import { Menu, Button,Input } from 'semantic-ui-react'



function Navigation(props) {
    return (

        <Menu borderless   className='menu'
        >
            <Menu.Menu >
            <Menu.Item   >ICrowdTask</Menu.Item >

                <Menu.Item link
                    className='item'
                    name='How It Works'


                />
                <Menu.Item link
                    className='item'
                    name='Requesters'

                />
                <Menu.Item link
                    className='item'
                    name='Workers'

                />
                <Menu.Item link
                    className='item'
                    name='Pricing'

                />
                <Button className='cssButton' color='green'>Sign In</Button>
                <Menu.Item />


            </Menu.Menu>
        </Menu>
    )
}
export default Navigation