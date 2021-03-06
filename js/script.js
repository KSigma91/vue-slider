var myApp = new Vue({
    el : '#app',
    data: {
        viewThumb : 0,
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },
    methods : {
        nextThumb() {
            this.viewThumb++;
            if(this.viewThumb > this.slides.length - 1) {
                this.viewThumb = 0;
            }
            //console.log(this.viewThumb);
        },
        prevThumb() {
            this.viewThumb--;
            if(this.viewThumb < 0) {
                this.viewThumb = this.slides.length - 1;
            }
            //console.log(this.viewThumb);
        },
        clickThumb(clicked) {
            this.viewThumb = clicked;
        }
    }
});


// goToImg(n) {
//     this.currLightboxImg = n<0 ? this.imgList.length-1 : n%this.imgList.length;
//   },
//   goToChunk(idx) {
//     this.transition_name = (idx < this.currSlide) ? "slide_prev" : "slide_next";
//     this.currSlide = idx;
//   }






























// const slides = [
//     {
//         image: 'img/01.jpg',
//         title: 'Svezia',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     },
//     {
//         image: 'img/02.jpg',
//         title: 'Svizzera',
//         text: 'Lorem ipsum.',
//     },
//     {
//         image: 'img/03.jpg',
//         title: 'Gran Bretagna',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//         image: 'img/04.jpg',
//         title: 'Germania',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
//     },
//     {
//         image: 'img/05.jpg',
//         title: 'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
//     }
// ];

// console.log(slides);