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
                <div id="sw_10" class="coin-sw coin-sw-10" v-on:click="sw(10)">
                    <span>D10</span>
                    <div class="coin-indi" v-if="coin_sw == '10'"></div>
                </div>

                <div id="sw_50" class="coin-sw coin-sw-50" v-on:click="sw(50)">
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
            coin_sw: "10"
        }
    },
    mounted () {

        document.getElementById("sw_10").addEventListener("click", (e)=>{
            switchObj("10")
        })

        document.getElementById("sw_50").addEventListener("click", (e)=>{
            switchObj("50")
        })

        var mixer
        // id scene
        
        var scene = new THREE.Scene()
        scene.background = new THREE.Color( 0x262626 )

        // id camera
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/360, 0.1, 1000 )
        camera.position.x = 0
        camera.position.y = 10
        camera.position.z = 15

        // id renderer
        var renderer = new THREE.WebGLRenderer()
        renderer.setSize( window.innerWidth, 360 )
        var cont = document.getElementById("coin-main-canvas").appendChild( renderer.domElement )
        cont.style.outline = "none"

        // id controls
        var controls = new OrbitControls( camera, renderer.domElement )
        controls.target.set( 0, 0, 0 )
        controls.minDistance = 10
        controls.maxDistance = 40
        controls.enableDamping = true
        controls.dampingFactor = 0.95
        controls.minPolarAngle = Math.PI/2;
        controls.maxPolarAngle = Math.PI/2;
        controls.enablePan = false
        controls.enableZoom = false
        controls.update()

        var light = new THREE.AmbientLight( 0xffffff, 0.4 )
        scene.add( light )

        var light2 = new THREE.DirectionalLight( 0xffffff, 0.25 )
        light2.castShadow = true
        light2.position.set(10, 15, 25 )
        scene.add( light2 )

        var light3 = new THREE.DirectionalLight( 0xffffff, 0.25 )
        light3.castShadow = true
        //light3.rotation = new THREE.Vector3()
        light3.position.set(0, 15, 10 )
        scene.add( light3 )

        var light5 = new THREE.DirectionalLight( 0xffffff, 0.25 )
        light5.castShadow = true
        light5.position.set( -10,-15, 20 )
        scene.add( light5 )

        var light6 = new THREE.DirectionalLight( 0xffffff, 0.25 )
        light6.castShadow = true
        light6.position.set( 12, 2, -20 )
        scene.add( light6 )

        // load model
        var loader = new FBXLoader()
        loader.load( './assets/models/coin2.fbx', function ( object ) {
            scene.add( object )
            object.name = "coin_10"
            object.rotation.x = 0
            object.rotation.y = 0
            object.position.x = 0
            object.position.y = 0
            object.position.z = 0
            object.scale.x = 0.02
            object.scale.y = 0.02
            object.scale.z = 0.02
            object.visible = true
        })

        loader.load( './assets/models/coin_50.fbx', function ( object ) {
            object.traverse( function ( child ) {
                if ( child.isMesh ) {
                    child.castShadow = true
                    child.receiveShadow = true
                    child.material = new THREE.MeshPhysicalMaterial( {  
                        metalness: 0.5,
                        roughness: 0.5
                    })
                }
            } )
            scene.add( object )

            object.name = "coin_50"
            object.rotation.x = 0
            object.rotation.y = 0
            object.position.x = 0
            object.position.y = 0
            object.position.z = 0
            object.scale.x = 2.2
            object.scale.y = 2.2
            object.scale.z = 2.2
            object.visible = false
        })

        function switchObj (tar) {
            if(tar === "10"){
                scene.getObjectByName("coin_10").visible = true
                scene.getObjectByName("coin_50").visible = false
            } else {
                scene.getObjectByName("coin_10").visible = false
                scene.getObjectByName("coin_50").visible = true
            }
        }

        var animate = function () {
            requestAnimationFrame( animate )
            controls.update()
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
    user-select: none;
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