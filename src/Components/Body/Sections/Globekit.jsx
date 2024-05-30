import { GlobeKitView, PointGlobe, Atmosphere, Background } from './../../../Utils/globekit.esm';

const apiKey = 'gk_9e70f56855c1ade78a4f50377ef4f9e06faaf7b33ccf45b690ac65b5fff6c16fc2aa34453b0dd0bf868139d49e24675e9f411239763e038ec96ad788b39c2d23';

const textures = {
    noise: 'globekit/clouds.png',
};

class GlobeKit {
    constructor(canvas) {

        this.gkOptions = {
            apiKey,
            wasmPath: "globekit/gkweb_bg.wasm",
            alpha: false,
            attributes: {
                alpha: true,
            },
            clearColor: [0.0, 0.0, 0.0, 0.0],
        };

        // Create the GlobeKitView object
        this.gkview = new GlobeKitView(canvas, this.gkOptions);
        this.gkview.movementModel.setLatLon(41, -111);

        // **********************************************************************
        //                   ONSELECTION
        // **********************************************************************
        this.gkview.onSelection = (list) => {
        list.drawables.forEach((el) => {
            if (el.obj.id === this.pointglobe.id) {
            if (el.selection !== undefined) {
                this.pointglobe.rippleAtLocation(el.selection.lat, el.selection.lon, 3000);
            }
            } else if (el.obj.id === this.points.id) {
            if (el.selection !== undefined) {
            }
            }
        });
        };

        // **********************************************************************
        //                   BACKGROUNDS
        // **********************************************************************
        this.background = new Background('globekit/bgwhite.png');
        this.gkview.addDrawable(this.background);

        // **********************************************************************
        //                   ATMOSPHERES
        // **********************************************************************
        this.atmosphere = new Atmosphere({texture: 'globekit/disk.png',});
        this.atmosphere.nScale = 1.02;
        this.gkview.addDrawable(this.atmosphere);

        // **********************************************************************
        //                   POINTGLOBE
        // **********************************************************************
        fetch('globekit/pointglobe.bin')
        .then((res) => res.arrayBuffer())
        .then((data) => {
            const pointglobeParams = {
            pointSize: 0.004,
            randomPointSizeVariance: 0.004,
            randomPointSizeRatio: 0.1,
            minPointAlpha: 0.0,
            minPointSize: 0.006,
            color: '#7367f0',
            };
            this.pointglobe = new PointGlobe(textures, data, pointglobeParams);
            this.pointglobe.setInteractive(true, true, false);
        })
        .then(() => {
            this.gkview.addDrawable(this.pointglobe, () => {
                this.gkview.startDrawing();
            });
        });
    }
}

export default GlobeKit
  