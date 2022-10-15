import Particles from "react-tsparticles";

function BezosConfetti() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#000000"
          }
        },
        fullScreen: {
          enable: true,
          zIndex: 2
        },
        interactivity: {
          detectsOn: "window"
        },
        emitters: {
          position: {
            x: 50,
            y: 100
          },
          rate: {
            quantity: 10,
            delay: 0.25
          }
        },
        particles: {
          color: {
            value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"]
          },
          move: {
            decay: 0.05,
            direction: "top",
            enable: true,
            gravity: {
              enable: true,
              maxSpeed: 150
            },
            outModes: {
              top: "none",
              default: "destroy"
            },
            speed: { min: 4, max: 60 }
          },
          number: {
            value: 0
          },
          opacity: {
            value: 1
          },
          rotate: {
            value: {
              min: 0,
              max: 60
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 2
            }
          },
          size: {
            value: 8
          },
          roll: {
            darken: {
              enable: true,
              value: 25
            },
            enable: true,
            speed: {
              min: 5,
              max: 15
            }
          },
          wobble: {
            distance: 30,
            enable: true,
            speed: {
              min: -7,
              max: 7
            }
          },
          shape: {
            type: [
              "circle",
              "square",
              "polygon",
              "character",
              "character",
              "character",
              "image",
              "image",
              "image"
            ],
            options: {
              image: [
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 200,
                  height: 200,
                  particles: {
                    size: {
                      value: 100
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 100,
                  height: 100,
                  particles: {
                    size: {
                      value: 40
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 100,
                  height: 100,
                  particles: {
                    size: {
                      value: 40
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 100,
                  height: 100,
                  particles: {
                    size: {
                      value: 40
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src:
                    "https://www.celebrity-cutouts.com/wp-content/uploads/2022/04/jeff-bezos-smile-celebrity-mask-450x450.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src: "https://particles.js.org/images/fruits/pepper.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src: "https://particles.js.org/images/fruits/plum.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src: "https://particles.js.org/images/fruits/star.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src: "https://particles.js.org/images/fruits/strawberry.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src: "https://particles.js.org/images/fruits/watermelon.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                },
                {
                  src:
                    "https://particles.js.org/images/fruits/watermelon_slice.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 16
                    }
                  }
                }
              ],
              polygon: [
                {
                  sides: 5
                },
                {
                  sides: 6
                }
              ],
              character: [
                {
                  fill: true,
                  font: "Verdana",
                  value: ["💩", "🤡", "🍀", "🍙", "🦄", "⭐️"],
                  style: "",
                  weight: 400
                }
              ]
            }
          }
        }
      }}
    />
  );
}

export default BezosConfetti;
