import randomInt from 'utils/random-int';
import randomFloat from 'utils/random-float';

/**
 * PointLight class
 */
class PointLight extends THREE.PointLight {

  /**
   * Constructor function
   * @param {Configuration} Configuration instance
   */
  constructor( { hex = 0xffffff, intensity = 1, distance = 0, decay = 1 } ) {

    super( parseInt(hex, 16), intensity, distance, decay );

    this.hex = parseInt(hex, 16);

    this.gravitationOptions = {
      x: {
        offset: randomFloat(-Math.PI/2, Math.PI/2),
        distance: randomInt(120, 200),
        velocity: randomFloat(0.5, 1)
      },
      y: {
        offset: randomFloat(-Math.PI/2, Math.PI/2),
        distance: randomInt(120, 200),
        velocity: randomFloat(0.5, 1)
      },
      z: {
        offset: randomFloat(-Math.PI/2, Math.PI/2),
        distance: randomInt(120, 200),
        velocity: randomFloat(0.5, 1)
      }
    }
  }

  addSphere() {
    const geom = new THREE.SphereGeometry(1, 5, 5);
    const mat = new THREE.MeshBasicMaterial({
      color: this.hex,
      wireframe: true
    });

    this.add(new THREE.Mesh(geom, mat));
  }

  /**
   * move function
   * Move the light where the camera is
   * @param {object} newPos Position vector of the camera
   */
  move(newPos) {
    this.position.copy(newPos);
  }

}

export default PointLight;