// components/commodityCard/commodityCard.js
Component({
  /**
   * Component properties
   */
  properties: {
    url: {
      type: String,
      value: ''
    },
    commodityInfo: {
      type: Object,
      value: {
        imageUrl: '',
        desc: '',
        price: '',
        tags: [],
        clickNum: 0,
        time: '',
        origin: {
          avatarUrl: '',
          nickname: '',
          tags: [],
        },
      },
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {

  }
})