import styled from '@emotion/styled'
//import image from '../../images/chat-texture.jpg'
import image from '../../images/memphis-colorful.png'
//import image from '../../images/ignasi_pattern_s.png'


export const RowColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ImageZoomOverlay = styled.div`
overflow: auto;
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
padding: 80px 40px;
background-color: rgba(255,255,255,0.9);
text-align: center;
z-index: 99999;
`

export const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
`;
export const GridElement = styled.div`
  ${(props)=> props.noFlex ? '' : 'flex: 1;'}
  flex:1;
  ${(props)=>{
    return props.grow ? `flex-grow: ${props.grow};` : null
  }}

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100vw;
  }

  overflow: scroll;
  border-right: 1px solid ${(props)=> props.theme.palette.primary.borders };
  h3 {
    margin-left: 20px;
  }
`;
export const MessageContainer = styled.div`
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: 14px 20px 14px 0;
  background-color: #fff;
  border-left: 2px solid transparent;
  cursor: pointer;
  &:hover{
    background: aliceblue;
  }
`
export const MessageControls = styled.div`
  display: flex;
  align-items: flex-start;
`
export const MessageHeader = styled.div`
  //flex: 1 1 auto;
  //min-width: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const MessageBody = styled.div`
    font-size: 14px;
    color: #bfbfbf;
    font-weight: 100;
    margin-top: 16px;
    text-indent: 10px;
    display: flex;
`
export const MessageEmail = styled.div`
    color: #222;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const ActivityAvatar = styled.div`
  //display: flex;
  align-self: center;
  position: relative;
`
export const Overflow = styled.div`
  overflow: auto;
  //height: 100vh;
  height: calc(100vh - 67px);
  background-color: ${(props)=> props.theme.palette.background.default };
`
export const ActivityIndicator = styled.span`
  position: absolute;
  height: 10px;
  width: 10px;
  background: #1be01b;
  border-radius: 10px;
  top: 6px;
  left: 64px;
`
export const FixedHeader = styled.div`
  padding:20px;
  border-bottom: 1px solid ${(props)=> props.theme.palette.primary.borders };
  display: flex;
  background: ${(props)=> props.theme.palette.background.paper };
  justify-content: space-between;
  align-items: center;
`
export const ChatMessageItem = styled.div`
    position: relative;
    margin: 8px 0 15px 0;
    padding: 8px 10px;
    max-width: 60%;
    display: block;
    word-wrap: break-word;
    border-radius: 3px;
    -webkit-animation: zoomIn .5s cubic-bezier(.42, 0, .58, 1);
    animation: zoomIn .5s cubic-bezier(.42, 0, .58, 1);
    clear: both;
    z-index: 999;
    display: flex;
    flex-direction: column;

    &.user {
      margin-left: 60px;
      float: left;
      color: #666;  
      align-self: flex-start;   
      background: ${(props)=> props.theme.palette.background.default};
      box-shadow: rgba(35, 47, 53, 0.27) 4px 3px 0px 0px;
      p {
        color: inherit;
      }

      //box-shadow: rgba(35,47,53,0.09) 0px 2px 8px 0px;
      padding: 17px 22px;
      border-radius: 5px 5px 5px 0px;
      
    }

    &.admin {
      margin-right: 61px;
      float: right;
      color: ${(props)=> props.message.privateNote ? `#222` : `#292a2b` };
      background: ${(props)=> props.message.privateNote ? `#feedaf` : props.theme.palette.primary.main };
      align-self: flex-end;

      

      box-shadow: rgba(35, 47, 53, 0.27) 4px 3px 0px 0px;

      /* NEW */
      //box-shadow: rgba(35, 47, 53, 0.09) 0px 2px 8px 0px;
      font-size: 13px;
      line-height: 1.5;
      position: relative;
      padding: 17px 22px;
      border-radius: 5px 5px 1px 5px;
    }
`;

export const ChatAvatar = styled.div`
    
    //background: rgba(0, 0, 0, 0.03);
    position: absolute;
    bottom: 0;

    &.user{
      left: -52px;
    }

    &.admin{
      right: -47px;
    }

    img {
      width: 40px;
      height: 40px;
      text-align: center;
      border-radius: 50%;
    }
`
export const StatusItem = styled.span`
  font-size: 9px;
  //color: #ccc;
`
export const UserDataList = styled.ul`
  li{
    span{
      margin-left:10px;
    }
  }
`

export const ConversationButtons = styled.div`
  display:flex;
  align-items: center;

`

export const ConversationsButtons = styled(ConversationButtons)`
  justify-content: space-between;
  width: 100%;
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
`

export const ChatOverflow = styled.div`
                 
`

export const ChatContainer = styled.div`

   display: flex;
   flex-direction: column;
   height: 100%;

   @media (min-width: 320px) and (max-width: 480px) {
      width: 100vw;
   }

   

  .box-container{
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    //background: aliceblue;
    //background-image: url('${image}');

    background: ${(props)=> props.theme.palette.background.paper };

    //background: #555b611c;
    //box-shadow: 1px 1px 2px 0px inset #5f5d5d94;

    @media (min-width: 320px) and (max-width: 480px) {
      height: 79vh;
    }
  }

  .overflow {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 15px;
    flex-direction: column-reverse;
    display: flex;
    height: calc(100vh - 416px);
  }

  .input{
    padding: 14px;
    padding-top: 0px;
  }

`
