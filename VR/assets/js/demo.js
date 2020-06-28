"use strict";

// SETTINGS of this demo :
// We don't use fixed FoV anymore
/*let SETTINGS = {
  cameraFOV: 40,    // in degrees, 3D camera FOV
};*/


// some globalz :
let THREECAMERA;

window.onload = function() {
  main();
}

// callback : launched if a face is detected or lost
function detect_callback(isDetected) {
  if (isDetected) {
    console.log('INFO in detect_callback() : DETECTED');
  } else {
    console.log('INFO in detect_callback() : LOST');
  }
}


// build the 3D. called once when Jeeliz Face Filter is OK
function init_threeScene(spec) {
  const threeStuffs = THREE.JeelizHelper.init(spec, detect_callback);
  console.log('One');
  // Create the JSONLoader for our hat:
  // const loader = new THREE.BufferGeometryLoader();
  // const loader = new THREE.GLTFLoader();
  // // Load our cool hat:
  // loader.load(
  //   // 'assets/js/models/luffys_hat.json',
  //   'assets/js/models/scene.glb',
  //   // function (geometry, material) {
  //     function (gltf) {
  //       console.log('GLTF', gltf.scene.children[0]);
  //     // we create our Hat mesh
  //     // const mat = new THREE.MeshBasicMaterial({
  //     //   map: new THREE.TextureLoader().load("assets/js/models/Texture.jpg")
  //     // });
  //     // const hatMesh = new THREE.Mesh(geometry, mat);

  //     // hatMesh.scale.multiplyScalar(1.2);
  //     // hatMesh.rotation.set(0, -40, 0);
  //     // hatMesh.position.set(0.0, 0.6, 0.0);
  //     // hatMesh.frustumCulled = false;
  //     // hatMesh.side = THREE.DoubleSide;
  //     // gltf.scene.children[0].material = new THREE.MeshLambertMaterial();
  //     //   console.log('GLTF', gltf.scene.children[0]);
  //       gltf.scene.scale.multiplyScalar(4);
  //     gltf.scene.rotation.set(0, -39.5, 0);
  //     gltf.scene.position.set(0.0, 1.2, 0.0);
  //     gltf.scene.frustumCulled = false;
  //     gltf.scene.side = THREE.DoubleSide;

  //     // threeStuffs.faceObject.add(hatMesh);
  //     threeStuffs.faceObject.add(gltf.scene);
  //   }, undefined, function ( error ) {

  //     console.error( error );
    
  //   } 
  // )

  let HATOBJ3D = new THREE.Object3D();

  const loader = new THREE.STLLoader();
  // Load our cool hat:
  loader.load(
    'assets/js/stl/SortingHat.stl',
    function (geometry) {
      // function (gltf) {
        // console.log('GLTF', gltf.scene.children[0]);
      // we create our Hat mesh
      const mat = new THREE.MeshPhongMaterial({
        color: 0x4C4C4C, ambient: 0x4C4C4C, specular: 0x030303, shading: THREE.SmoothShading
      });
      const hatMesh = new THREE.Mesh(geometry, mat);

      hatMesh.scale.multiplyScalar(0.015);
      hatMesh.rotation.set(-10.95, -59.76, -9.5);
      hatMesh.position.set(0.0, 1.8, 0.0);
      hatMesh.frustumCulled = false;
      hatMesh.side = THREE.DoubleSide;
      
      // CREATE THE MASK
      const maskLoader = new THREE.BufferGeometryLoader();
      /*
      faceLowPolyEyesEarsFill.json has been exported from dev/faceLowPolyEyesEarsFill.blend using THREE.JS blender exporter with Blender v2.76
      */
      maskLoader.load('assets/js/stl/mask/faceLowPolyEyesEarsFill2.json', function (maskBufferGeometry) {
        const vertexShaderSource = 'varying vec2 vUVvideo;\n\
        varying float vY, vNormalDotZ;\n\
        const float THETAHEAD=0.25;\n\
        void main() {\n\
          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);\n\
          vec4 projectedPosition=projectionMatrix * mvPosition;\n\
          gl_Position=projectedPosition;\n\
          \n\
          //compute UV coordinates on the video texture :\n\
          vec4 mvPosition0 = modelViewMatrix * vec4( position, 1.0 );\n\
          vec4 projectedPosition0=projectionMatrix * mvPosition0;\n\
          vUVvideo=vec2(0.5,0.5)+0.5*projectedPosition0.xy/projectedPosition0.w;\n\
          vY=position.y*cos(THETAHEAD)-position.z*sin(THETAHEAD);\n\
          vec3 normalView=vec3(modelViewMatrix * vec4(normal,0.));\n\
          vNormalDotZ=pow(abs(normalView.z), 1.5);\n\
        }';

         const fragmentShaderSource = "precision lowp float;\n\
        uniform sampler2D samplerVideo;\n\
        varying vec2 vUVvideo;\n\
        varying float vY, vNormalDotZ;\n\
        void main() {\n\
          vec3 videoColor=texture2D(samplerVideo, vUVvideo).rgb;\n\
          float darkenCoeff=smoothstep(-0.15, 0.15, vY);\n\
          float borderCoeff=smoothstep(0.0, 0.85, vNormalDotZ);\n\
          gl_FragColor=vec4(videoColor*(1.-darkenCoeff), borderCoeff );\n\
          // gl_FragColor=vec4(borderCoeff, 0., 0., 1.);\n\
          // gl_FragColor=vec4(darkenCoeff, 0., 0., 1.);\n\
        }";

        const mat = new THREE.ShaderMaterial({
          vertexShader: vertexShaderSource,
          fragmentShader: fragmentShaderSource,
          transparent: true,
          flatShading: false,
          uniforms: {
            samplerVideo:{ value: THREE.JeelizHelper.get_threeVideoTexture() }
          },
          transparent: true
        });
        maskBufferGeometry.computeVertexNormals();
        const FACEMESH = new THREE.Mesh(maskBufferGeometry, mat);
        FACEMESH.frustumCulled = false;
        FACEMESH.scale.multiplyScalar(1.12);
        FACEMESH.position.set(0, 0.5, -0.75);
        

        HATOBJ3D.add(hatMesh);
        HATOBJ3D.add(FACEMESH);

      threeStuffs.faceObject.add(HATOBJ3D);
    });
    }, undefined, function ( error ) {

      console.error( error );
    
    } 
  );

  // CREATE LIGHT
  // const ambientLight = new THREE.AmbientLight(0XFFFFFF, 1);
  // const ambientLight = new THREE.AmbientLight(0X404040,0.8);
  const ambientLight = new THREE.AmbientLight(0X666666);
  threeStuffs.scene.add(ambientLight);

  // const directionalLight = new THREE.DirectionalLight(0xffffff,0.8);
  // directionalLight.position.set(0,1,0);
  // directionalLight.castShadow = true;
  // threeStuffs.scene.add(directionalLight);

  // const light = new THREE.PointLight(0xc4c4c4,10);
  // light.position.set(0,300, 500);
  // threeStuffs.scene.add(light);

  // const light2 = new THREE.PointLight(0xc4c4c4,10);
  // light2.position.set(500,100, 0);
  // threeStuffs.scene.add(light2);

  // const light3 = new THREE.PointLight(0xc4c4c4,10);
  // light3.position.set(0,100,-500);
  // threeStuffs.scene.add(light3);

  // const light4 = new THREE.PointLight(0xc4c4c4,10);
  // light4.position.set(-500,300,0);
  // threeStuffs.scene.add(light4);

  const light1 = new THREE.DirectionalLight(0xffffff);
  light1.position.set(0, 100, 100);
  threeStuffs.scene.add(light1);
        
  const light2 = new THREE.DirectionalLight(0xffffff);
  light2.position.set(0, -100, -100);
  threeStuffs.scene.add(light2);

  // CREATE THE CAMERA
  // old fashioned way: with a fixed FoV:
  //const aspecRatio = spec.canvasElement.width / spec.canvasElement.height;
  //THREECAMERA = new THREE.PerspectiveCamera(SETTINGS.cameraFOV, aspecRatio, 0.1, 100);
  
  // New hype and lazy way, the helper guess a plausible FoV depending on the hardware:
  THREECAMERA = THREE.JeelizHelper.create_camera();
} // end init_threeScene()

// Entry point, launched by body.onload():
function main() {
  console.log('ONE');
  JeelizResizer.size_canvas({
    canvasId: 'jeeFaceFilterCanvas',
    callback: function(isError, bestVideoSettings){
      init_faceFilter(bestVideoSettings);
    }
  })
}

function init_faceFilter(videoSettings){
  JEEFACEFILTERAPI.init({
    canvasId: 'jeeFaceFilterCanvas',
    NNCpath: 'assets/js/NNC/', // path of NNC.json file
    videoSettings: videoSettings,
    callbackReady: function (errCode, spec) {
      if (errCode) {
        console.log('AN ERROR HAPPENED. SORRY BRO :( . ERR =', errCode);
        return;
      }

      console.log('INFO : JEEFACEFILTERAPI IS READY');
      init_threeScene(spec);
    }, // end callbackReady()

    // called at each render iteration (drawing loop)
    callbackTrack: function(detectState) {
      THREE.JeelizHelper.render(detectState, THREECAMERA);
    } // end callbackTrack()
  }); // end JEEFACEFILTERAPI.init call
} // end main()

