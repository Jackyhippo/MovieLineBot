export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://image.tmdb.org/t/p/w500/kl9JJ8288bNsY8oqT1SpQh1w2mb.jpg',
      size: 'full',
      aspectRatio: '18:20',
      aspectMode: 'fit',
      action: {
        type: 'uri',
        uri: 'https://line.me/'
      },
      margin: 'none',
      position: 'relative',
      backgroundColor: '#333333'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'The Last Airbender',
          weight: 'bold',
          size: 'lg',
          style: 'italic',
          decoration: 'underline',
          position: 'relative',
          align: 'start',
          wrap: false
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: '上映時間：',
              size: 'sm',
              flex: 0
            },
            {
              type: 'text',
              text: '2010-06-30',
              size: 'md',
              margin: 'xs'
            }
          ],
          margin: 'none'
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: '平均評分：',
              flex: 0,
              size: 'sm'
            },
            {
              type: 'text',
              text: '4.6',
              size: 'md',
              margin: 'xs'
            }
          ],
          margin: 'none'
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: '評分總數：',
              flex: 0,
              size: 'sm'
            },
            {
              type: 'text',
              text: '3985',
              size: 'md',
              margin: 'xs'
            }
          ],
          margin: 'none'
        }
      ],
      borderWidth: 'none',
      cornerRadius: 'none'
    }
  }
}
