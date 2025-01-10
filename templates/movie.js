export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg',
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '1:1',
          gravity: 'center'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          position: 'absolute',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            endColor: '#00000000',
            startColor: '#00000099'
          },
          width: '100%',
          height: '40%',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px'
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: '音速小子3',
                  color: '#ffffff',
                  weight: 'bold',
                  style: 'italic',
                  decoration: 'underline'
                },
                {
                  type: 'text',
                  text: '上映時間',
                  color: '#ffffff',
                  size: 'sm'
                },
                {
                  type: 'text',
                  text: '2024-12-19',
                  color: '#ffffff',
                  size: 'sm'
                }
              ],
              spacing: 'xs'
            }
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          paddingAll: '20px'
        }
      ],
      paddingAll: '0px'
    }
  }
}
