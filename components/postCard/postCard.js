// components/post/post.js

Component({
  /**
   * Component properties
   */
  properties: {
    showAuthor: {
      type: Boolean,
      value: false
    },
    showHeat: {
      type: Boolean,
      value: false
    },

    isLink: {
      type: Boolean,
      value: false
    },
    
    linkType: {
      type: String,
      value: 'navigateTo'
    },

    url: {
      type: String,
      value: ''
    },

    post: {
      type: Object,
      value: {
        _id: '',
        content: '',
        images: [],
        tags: [],
        comments: [],
        likes: 10,
        time: 0
      },
    },
    userInfo: {
      type: Object,
      value: {
        avatarUrl: '',
        nickname: '',
        age: 18,
        gengder: 0,
      },
    }

  },

  /**
   * Component initial data
   */
  data: {
    userInfo: {
      avatarUrl: '',
      nickname: '',
      age: 18,
      gengder: 0,
    },

    hasLike: false, // 是否已经对该表白帖点赞
  },

  /**
   * Component methods
   */
  methods: {
    bindLikeConfession(e) {
      console.log(e.target);
    }
  }
})