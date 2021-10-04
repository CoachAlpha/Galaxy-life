function positionParticleWave(particles) {
    
    for (let i = 0; i < particles.length; i++) {
      let x = i / binCount * width * 2
      let y = random(0, height)
      let position = createVector(x, y)
      let partickle = new Particle(position)
      particles[i] = partickle
    }
    
  }
  




  function updateParticles(spectrum) {
    spectrum.forEach((bin, i) => {
      let binLevel = map(bin, 0, 255, 0, 1)
      particles[i].update(binLevel)
      particles[i].draw()
    })
  }