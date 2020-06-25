const loadPath = (fileName) => {

  const fileArray = fileName.split('.')
  //console.log(file)
  const extension  = fileArray[1]
  if(extension === 'mp3')
    return  `assets/sounds/${fileName}`

  if(extension === 'png' || extension === 'jpg')
    return `assets/images/${fileName}`
  

}

//return loadPath
