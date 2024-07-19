const $video = document.querySelector('#video')
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $fordward = document.querySelector('#fordward')
        const $progress = document.querySelector('#progress')

        $play.addEventListener('click',handlePlay)
        $pause.addEventListener('click',handlePause)
        $backward.addEventListener('click',handleBackward)
        $fordward.addEventListener('click',handleFordward)
        $video.addEventListener('loadedmetadata', handleLoaded)
        $video.addEventListener('timeupdate', handleTimeupdate)
        $progress.addEventListener('input', handleInput)

        function handlePlay(){
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('le diste click al boton de play')
        }

        function handlePause(){
            $video.pause()
            $pause.hidden = true
            $play.hidden = false
            console.log('le diste click al boton de pausa')
        }

        function handleBackward(){
            $video.currentTime = $video.currentTime - 10
            console.log('para atrás 10 segundos',$video.currentTime)
        }

        function handleFordward(){
            $video.currentTime = $video.currentTime + 10 
            console.log('para adelante 10 segundos',  $video.currentTime)
        }

        function handleLoaded(){
            $progress.max = $video.duration
            console.log('ha cargado mi video', $video.duration)
        }

        function handleTimeupdate(){
            $progress.value = $video.currentTime
            console.log('holi', $video.currentTime)
        }

        function handleInput(){
            $video.currentTime = $progress.value 
            console.log($progress.value)

        }
