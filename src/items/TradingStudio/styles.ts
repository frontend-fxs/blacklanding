import styled from '@emotion/styled';

export const TradingStudioSection = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 2.8125rem 1rem 0;
  @media screen and (min-width: 998px) {
    padding: 4.6875rem 1rem 0;
  }
`;
export const TradingStudioTitle = styled.h2`
  width: 90%;
  margin: 0 auto 0.375rem;
`;
export const TradingStudioSubtitle = styled.p`
  font-weight: 300;
  font-size: 0.91875rem;
  line-height: 1.25rem;
  @media screen and (min-width: 998px) {
    font-size: 1rem;
    line-height: 1.3125rem;
    margin: 0;
    margin-bottom: 2rem;
  }
`;
export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  @media screen and (min-width: 414px) {
    min-width: calc(69px * 5);
  }
  @media screen and (min-width: 578px) {
    max-width: calc(69px * 5);
    margin: auto;
  }
`;
export const NavbarItemWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69px;
  height: 72px;
  margin-bottom: 20px;
  background-color: ${({ isActive }) => (isActive ? '#F3F3F8' : 'transparent')};
  border-bottom: ${({ isActive }) => (isActive ? '5px solid #E4871B' : '')};
`;
export const IconItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#FFF' : '#f3f3f8')};
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    `
    .svg-inline--fa {
      color: #e4871b;
    }`}
  @media screen and (min-width: 998px) {
    width: 30px;
    height: 30px;
  }
`;

export const ItemTitle = styled.h4`
  margin: 0;
  margin-bottom: 0.4375rem;
`;
export const ItemDescription = styled.p`
  margin: 0;
  margin-bottom: 0.625rem;
  height: 28px;
`;
export const ItemImgWrapper = styled.div`
  position: relative;
`;
export const ItemImg = styled.img`
  width: 90%;
  margin: auto;
  @media screen and (min-width: 998px) {
    width: 100%;
  }
`;
export const BtnVideoWrapper = styled.button`
  position: absolute;
  left: 50%;
  bottom: -15px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 44px;
  border: 1px solid #e4871b;
  color: #e4871b;
  background-color: #fff;
  cursor: pointer;
  .svg-inline--fa.fa-w-16 {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 998px) {
    left: 83.5%;
    bottom: 25px;
    width: 185px;
  }
`;
export const BtnVideoLabel = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  margin: 0;
  margin-left: 0.375rem;
  @media screen and (min-width: 998px) {
    font-size: 0.91875rem;
  }
`;
export const ItemIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;
export const ItemIndicator = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  margin: 0 0.3125rem;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#8C8D91' : '#DDDEDF')};
  cursor: pointer;
`;
export const TradingStudioBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.25rem;
  @media screen and (min-width: 998px) {
    margin-bottom: 3.75rem;
  }
`;
export const BtnLink = styled.a`
  height: 35px;
  width: 163px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 998px) {
    width: 156px;
    margin-top: 2rem;
  }
`;
export const BtnLabel = styled.span`
  font-size: 0.8rem;
  line-height: 1.375rem;
  @media screen and (min-width: 998px) {
    font-size: 0.91875rem;
  }
`;
/**************
 *  DESKTOP
 *************/
export const MainDesktopContainer = styled.div`
  display: flex;
`;
export const Sidebar = styled.div`
  margin-right: 1rem;
`;
export const SidebarItem = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 255px;
  padding: 0.625rem;
  box-sizing: border-box;
  background-color: ${({ isActive }) => (isActive ? '#F3F3F8' : '#FFF')};
  cursor: pointer;
`;
export const SidebarItemWraper = styled.div`
  flex: 1;
`;
export const SidebarItemtDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.625rem;
`;
export const SidebarItemTitle = styled.h4`
  font-size: 1rem;
  line-height: 1.25rem;
  color: #1b1c23;
  margin: 0;
`;
export const SidebarItemSubtitle = styled.p`
  margin: 0;
  text-align: left;
  font-size: 0.8rem;
  line-height: 1.0625rem;
`;
