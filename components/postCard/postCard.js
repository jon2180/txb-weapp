// components/post/post.js

Component({
  /**
   * Component properties
   */
  properties: {
    /** 帖子主要信息 */
    post: {
      type: Object,
      value: {
        _id: '',
        content: '',
        images: [],
        tags: [],
        comments: [],
        likes: 10,
        time: 0,
        origin: {
          type: Object,
          value: {
            avatarUrl: '',
            nickName: ''
          },
        }
      },
    },

    /** 是否已经对该表白帖点赞 */
    hasLike: {
      type: Boolean,
      value: false
    },

    /** 是否显示作者信息（头像，昵称，时间） */
    showAuthor: {
      type: Boolean,
      value: false
    },

    /** 是否展示热度和互动 */
    showHeat: {
      type: Boolean,
      value: false
    },

    /** 是否展示标签 */
    showTags: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Component initial data
   */
  data: {},

  /**
   * Component methods
   */
  methods: {
    bindClickLikePost(e) {
      this.triggerEvent('clickLikePost', { _id: e.target.dataset.id })
    },

    bindClickTag(e) {
      this.triggerEvent('clickTag', { name: e.target.dataset.name })
    },

    bindClickPost(e) {
      console.log(e)
      this.triggerEvent('clickPost', { _id: e.currentTarget.dataset.id })
    }
  }
})