import styled from 'styled-components'

export const A = styled.a`
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    img{
        width: 100%;
        border-radius: 8px 8px 0px 0px ;
    }

    div{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 0 1rem;
        padding-top: 4rem;
        padding-bottom: .25rem;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);
        border-radius: 0px 0px 8px 8px;

        strong{
            font-weight: bold;
            color: #fff;
            display: block;
        }
        span{
            color: #d4d4d8;
            display: block;
            font-size: 14px;
            margin-top: .25rem;
        }
    }


  &:hover{
      transform: translateY(-20px);
  }
`    
      