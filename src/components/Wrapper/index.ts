import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 50px auto;
  padding: 0 20px;
  position: relative;
  .center-line{
  position: absolute;
  height: 100%;
  width: 4px;
  background: #3e3d3d;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
}
#section .icon,
.center-line .scroll-icon{
  position: absolute;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ff7979;
  background-color: gray;
}
.wrapper .row{
  display: flex;
}
.wrapper .row-1{
  justify-content: flex-start;
}
.wrapper .row-2{
  justify-content: flex-end;
}
.wrapper .row #section{
  border-radius: 5px;
  width: calc(50% - 40px);
  padding: 20px;
  position: relative;
}
#section::before{
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: #fff;
  top: 28px;
  z-index: -1;
  transform: rotate(45deg);
}


.center-line .scroll-icon{
  bottom: 0px;
  left: 50%;
  font-size: 25px;
  transform: translateX(-50%);
}
.row-1 #section .icon{
  top: 15px;
  right: -60px;
}
.row-2 #section .icon{
  top: 15px;
  left: -60px;
}
.row #section p{
  margin: 10px 0 17px 0;
}

.row section .bottom a:hover{
  transform: scale(0.97);
}
@media(max-width: 790px){
  .wrapper .center-line{
    left: 40px;
  }
  .wrapper .row{
    margin: 30px 0 3px 60px;
  }
  .wrapper .row #section{
    width: 100%;
  }
  .row-1 #section::before{
    left: -7px;
  }
  .row-1 #section .icon{
    left: -60px;
  }
}
@media(max-width: 440px){
  .wrapper .center-line,
  .row #section::before,
  .row #section .icon{
    display: none;
  }
  .wrapper .row{
    margin: 10px 0;
  }
}
`;