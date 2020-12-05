import React, { Component } from 'react';

import api from '../../services/api'

import "./styles.css";

const imagens = [
    {url: require('../../assets/unb.jpg')},
    {url: require('../../assets/unb2.jpg')},
    {url: require('../../assets/unb3.jpg')},
    {url: require('../../assets/unb4.jpg')},
    {url: require('../../assets/unb5.jpg')},
    {url: require('../../assets/unb6.jpg')},
    {url: require('../../assets/unb7.jpg')},
    {url: require('../../assets/unb8.jpg')},
    {url: require('../../assets/unb9.jpg')},
    {url: require('../../assets/unb10.jpg')},
];

export default function Starter() {


    function Render(item) {
        var block = [];

        for (var i = 0; i < 10; i++) {
            block.push(<img src={item.url}/>);
        }

        return block;

    }
    
    return ( 
            
        <div id="row">
            {imagens.map( (item,index) =>
                <div className="column" key={index}>
                    {Render(item)}

                </div>
            )}
        </div>

        
    );

}
