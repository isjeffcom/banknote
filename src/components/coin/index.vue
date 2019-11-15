<template>
    <div id="coin">
        <div id="coin-title">
            <img :src="cdata.titleIcon" alt="coin">
        </div>


        <div id="coin-main">
            <div id="coin-main-cont">
                <div id="coin-main-canvas"></div>
            </div>
        </div>

        <div id="coin-switcher">
            <div id="coin-switcher-cont">
                <div class="coin-sw coin-sw-10" v-on:click="sw(10)">
                    <span>D10</span>
                    <div class="coin-indi" v-if="coin_sw == '10'"></div>
                </div>

                <div class="coin-sw coin-sw-50" v-on:click="sw(50)">
                    <span>D50</span>
                    <div class="coin-indi" v-if="coin_sw == '50'"></div>
                </div>
            </div>
        </div>

        <div id="coin-intro">
            <div id="coin-intro-inner">
                <span>{{cdata.intro}}</span>
            </div>
        </div>
    </div>
</template>

<script>

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { Vector3 } from 'three'

export default {
    name: "coin",
    props:{
        cdata: {
            titleIcon: String,
            intro: String
        }
    },
    data(){
        return{
            coin_sw: "50"
        }
    },
    mounted () {
        var mixer
        // id scene
        
        var scene = new THREE.Scene()
        scene.background = new THREE.Color( 0x262626 )

        // id camera
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
        camera.position.x = 0
        camera.position.y = -10
        camera.position.z = 5

        // id renderer
        var renderer = new THREE.WebGLRenderer()
        renderer.setSize( window.innerWidth, window.innerHeight )
        var cont = document.getElementById("coin-main-canvas").appendChild( renderer.domElement )
        cont.style.outline = "none"

        // id controls
        var controls = new OrbitControls( camera, renderer.domElement )
        controls.target.set( 0, 0, 0 )
        controls.minDistance = 2
        controls.maxDistance = 20
        controls.dampingFactor = 0.55
        controls.minPolarAngle = 0
        controls.update()

        var light = new THREE.AmbientLight( 0xffffff, 1 )
        scene.add( light )

        var light2 = new THREE.DirectionalLight( 0xffffff, 1 )
        light2.position.set( 0, 0, 5 )
        scene.add( light2 )

        var light3 = new THREE.DirectionalLight( 0xffffff, 1 )
        light3.position.set( 0, 10, 5 )
        scene.add( light3 )

        var light4 = new THREE.DirectionalLight( 0xffffff, 1 )
        light4.position.set( -2, -5, 5 )
        scene.add( light4 )

        // load model
        var loader = new FBXLoader()
        loader.load( './assets/models/coin.fbx', function ( object ) {
            scene.add( object )
            object.rotation.x = 90
            object.rotation.y = 90
            object.scale.x = 0.2
            object.scale.y = 0.2
            object.scale.z = 0.2
            
        })

        var animate = function () {
            requestAnimationFrame( animate )
            renderer.render( scene, camera )
        }

        animate()
    },
    methods:{
        sw(val){
            this.coin_sw = val
        }
    }
}
</script>

<style scoped>
canvas{
    width: 100%;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); /* mobile webkit */
}

canvas:focus{
    outline: none;
}

#coin-title{
    margin-bottom: 16px;
}

#coin-title img{
    width: 60px;
}

#coin-main{
    overflow: hidden;
    height: 360px;
}

#coin-main-canvas{
    height: 360px;
}

#coin-main-canvas canvas{
    outline: none;
}

#coin-switcher{
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
    cursor: pointer;
}

#coin-switcher-cont{
    width: 200px;
    font-size: 24px;
    display:flex;
    font-weight: lighter;
    margin-left: auto;
    margin-right: auto;
}

.coin-sw{
    width: 60px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.coin-indi{
    width: 28px;
    height: 2px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4px;
    background: #262626;
}

#coin-intro{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}


#coin-intro-inner span{
    font-size: 18px;
    font-weight: lighter;
}



</style>