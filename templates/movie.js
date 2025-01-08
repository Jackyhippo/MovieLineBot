export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/v8EomaOpMWeoOjbTRsMpDCa4wwT.jpg',
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
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: '音速小子3',
                      size: 'xl',
                      color: '#ffffff'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'text',
                          text: '時間',
                          color: '#ffffff',
                          size: 'md',
                          flex: 0,
                          align: 'end'
                        },
                        {
                          type: 'text',
                          text: '2024年12月27日',
                          color: '#ffffff',
                          decoration: 'none',
                          size: 'md',
                          align: 'end'
                        }
                      ],
                      flex: 0,
                      spacing: 'lg'
                    }
                  ]
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
