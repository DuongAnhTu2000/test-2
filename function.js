const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "MUSIC_PLAYER";
const VOLUME_VALUE_KEY = "VOLUME_VALUE";

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const playList = $('.playlist')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const volumeRange = $('#controls_lever_range')
const muteBtn = $('.btn-mute')
.
const app = {
    currentIndex: 0,
    isPlaying: false,
    isTimeupdate: true,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: "Scared To Be Lonely",
            singer: "Martin Garrix feat Dua Lipa",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui936/ScaredToBeLonely-MartinGarrixDuaLipa-4760007.mp3?st=5bLfSlkq_Wk85Ohup7CnSw&e=1643454564&t=1643368163481",
            image: "https://data.chiasenhac.com/data/cover/69/68364.jpg"
        },
        {
            name: "All too well",
            singer: "Taylor Swift",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1024/AllTooWell10MinuteVersionTaylorsVersion-TaylorSwift-7120438.mp3?st=iC97eiGVw2758vKYi2pV3Q&e=1643454486&t=1643368084895",
            image: "https://data.chiasenhac.com/data/cover/1/621.jpg"
        },
        {
            name: "We Are The People",
            singer: "Martin Garrix",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1016/WeAreThePeople-MartinGarrixBonoTheEdge-7021971.mp3?st=iU5CK-KbKPAy_jeoZD2V1Q&e=1643454593&t=1643368192181",
            image: "https://data.chiasenhac.com/data/cover/141/140295.jpg"
        },
        {
            name: "High On Life",
            singer: "Martin Garrix",
            path: "https://aredir.nixcdn.com/Sony_Audio52/HighOnLife-MartinGarrixBonn-5775271.mp3?st=4OxCEhYiHghfYKsv5JNUCA&e=1645024374&t=1644937975109",
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2018/12/04/2/4/9/1/1543910165629_500.jpg"
        },
        {
            name: "Bước Qua Mùa Cô Đơn",
            singer: "Vũ",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1008/BuocQuaMuaCoDon-Vu-6879419.mp3?st=nfad9wevcb1Boz0adeQd0w&e=1643454645&t=1643368244051",
            image: "https://data.chiasenhac.com/data/cover/133/132452.jpg"
        },
        {
            name: "Cruel Summer",
            singer: "Taylor Swift",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui988/CruelSummer-TaylorSwift-6057365.mp3?st=T6AJqzIglgkR4bTfxhD_DA&e=1643477007&t=16433906057303",
            image: "https://data.chiasenhac.com/data/cover/109/108656.jpg"
        },
        {
            name: "Together",
            singer: "Martin Garrix feat Matisse & Sadko",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui929/Together-MartinGarrixMatisseSadko-4593347.mp3?st=4LWjIAdHSwGXiof4crdShA&e=1643476532&t=1643390130838",
            image: "https://data.chiasenhac.com/data/cover/65/64710.jpg"
        },
        {
            name: "Love Story ",
            singer: "Taylor Swift",
            path: "https://c1-ex-swe.nixcdn.com/Unv_Audio197/LoveStoryTaylorsVersion-TaylorSwift-6999637.mp3?st=vaWdthIApODUplDaEdDI5Q&e=1643475953&t=1643389552396",
            image: "https://data.chiasenhac.com/data/cover/4/3562.jpg"
        },
        {
            name: "Let Me Love You",
            singer: "DJ Snake feat Justin Bieber",
            path: "https://c1-ex-swe.nixcdn.com/Sony_Audio28/LetMeLoveYou-DJSnakeJustinBieber-5008850.mp3?st=ZzfwDZTCWaoXpL0j8Zxy6Q&e=1643476416&t=1643390015172",
            image: "https://data.chiasenhac.com/data/cover/62/61377.jpg"
        },
        {
            name: "So Far Away",
            singer: " Martin Garrix, David Guetta",
            path: "https://c1-ex-swe.nixcdn.com/Sony_Audio39/SoFarAway-MartinGarrixDavidGuettaJamieScottRomyDya-5298615.mp3?st=24atbWjFCNyo4kc6Vp8sCg&e=1643478112&t=1643391711095",
            image: "https://data.chiasenhac.com/data/cover/80/79755.jpg"
        },
        {
            name: "Exile",
            singer: "Taylor Swift",
            path: "https://c1-ex-swe.nixcdn.com/Unv_Audio182/Exile-TaylorSwiftBonIver-6362166.mp3?st=5VvjVmov1sk3rAony2VH5g&e=1643476018&t=1643389617353",
            image: "https://data.chiasenhac.com/data/cover/127/126308.jpg"
        },
    ],

    // render UI bài hát
    render () {
        const html = this.songs.map((song,index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `
        })
        playList.innerHTML = html.join('')
    },
    defineProperties () {
        Object.defineProperty(this, 'currentSong', {
            get () {
                return this.songs[this.currentIndex]
            }
        })
    },

    // Lưu data vào localStorage
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
        setConfig(key, value) {
            this.config[key] = value;
            localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
        },

    .
    handleEvents () {
        const _this = this
        const cdWidth = cd.offsetWidth
        // Xử lý CD rotate
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' },
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }
        // xử lý khi click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        // Khi play bài hát
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        // Khi pause bài hát
        audio.onpause = function () {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        let checkOnmouseAndTouch = true;
        progress.onmousedown = function () {
            checkOnmouseAndTouch = false;
        }

        progress.ontouchstart = function () {
            checkOnmouseAndTouch = false;
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            const time_start = $('.controls_time--left');
            const time_count = $('.controls_time--right');

            if (audio.duration && checkOnmouseAndTouch) {
                const progressBar = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressBar
                // _this.setConfig("currentTime", audio.currentTime)

                var presentTime = Math.floor(audio.currentTime); // thời gian hiện tại 
                var secondStart = presentTime % 60; // số giây
                var minuteStart = Math.floor(presentTime / 60); // số phút
                if (secondStart < 10) {
                    var tenOfSecondStart = 0; // số chục giây
                } else {
                    tenOfSecondStart = "";
                }
                time_start.textContent =  minuteStart + ":" + tenOfSecondStart + secondStart;
                // Time Count
                var totalTime = Math.floor(audio.duration); // Tổng số thời gian bài hát
                var secondEnd = totalTime % 60; //số giây
                var minuteEnd = Math.floor(totalTime / 60); //số phút
                if (secondEnd < 10) {
                    var tenOfSecondEnd = 0; // số chục giây
                } else {
                    tenOfSecondEnd = "";
                }

                time_count.textContent =  + minuteEnd + ":" + tenOfSecondEnd + secondEnd;
            }
        }

        // Xử lý khi tua bài hát
        progress.onchange = function (e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
            checkOnmouseAndTouch = true;
        }

        // next bài hát
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // prev bài hát
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Xử lý random bật / tắt bài hát
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Xử lý repeat lại bài hát
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        // Xử lý next bài hát khi audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.load()
            } else {
                nextBtn.click()
            }
            audio.play()
        }
        // On/Off volume
        muteBtn.onclick = function() {
            if(audio.muted) {
                audio.muted = false;
                player.classList.remove('muting')
                volumeRange.value = localStorage.getItem(VOLUME_VALUE_KEY) ? localStorage.getItem(VOLUME_VALUE_KEY) *100 : 50
            } else {
                audio.muted = true;
                player.classList.add('muting')
                volumeRange.value = 0
            }
        }

        volumeRange.onchange = function () {
            audio.volume = volumeRange.value / 100
            localStorage.setItem(VOLUME_VALUE_KEY, audio.volume)
        }
        // Xử lý khi click vào bài hát
        playList.onclick = function (e) {
            const songElementNode = e.target.closest('.song:not(.active)')
            if( songElementNode || e.target.closest('.option')) {
                if(songElementNode) {
                   _this.currentIndex = Number(songElementNode.dataset.index)
                   _this.loadCurrentSong()
                   audio.play()
                   _this.render()
                }
            }
        }
    },
    scrollToActiveSong () {
       setTimeout(() => {
           $('.song.active').scrollIntoView({
               behavior: 'smooth',
               block: 'center',
           })
       },300)
    },
    // Load UI cd bài hát
    loadCurrentSong () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    loadConfig () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start () {
        // Gán cấu hình từ config vào ứng dụng
        
        this.loadConfig()
        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        // Lắng nghe / xử lý DOM event
        this.handleEvents()

        //  Load thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        // Render playlist
        this.render()
        
        // Hiển thị trạng thái ban đầu của button repeat & random

        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)

    },

}
app.start()
