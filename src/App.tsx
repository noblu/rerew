import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { getNFTSales } from './hooks/api';
import styled from 'styled-components';

// export const Wrapper = styled.div`
// width: 100%;
// `;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;

export const SortByLogo = styled.div`
  padding: 0;
  margin-bottom: 1em;
  width: 100%;
  height: 300px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  position: relative;
  background-size: cover;
  background-position: center;
`;

export const MenuWrapper = styled.div`
  flex: 1;
  border-right: 1px solid #c9cccc;
  height: 100vh;
`;

export const MainWrapper = styled.div`
  flex: 4;
`;

export const AllNft = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  padding-top: 10px;
`;

export const NftGrid = styled.div`
  padding: 20px 0px 0 20px;
  flex: 4.5;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  // margin-top: 110px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
`;

export const Nft = styled.div`
  width: 340px;
  height: 500px;
  color: #000000;
  line-height: 25.144px;
  // background-color: #dbdada;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
`;

export const Items = styled(Nft)`
  width: 100%;
  visibility: hidden;
  transition: visibility 1000ms;
  height: 30px;
  background-color: #1868b7;
  text-align: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  &:hover {
    visibility: visible;
  }
`;

export const NftTime = styled.div`
  border-color: #000000;
  border-radius: 8px;
  border-style: solid;
  border-width: 2px;
  color: #000000;
  line-height: 25.144px;
  padding: 15px;
  width: 100%;
  height: 87px;
  border: none;
  display: flex;
  flex-direction: column;
`;

export const NftImg = styled.img`
  background-color: #ffffff;
  border-color: #ffffff;
  border-radius: 16px;
  border-style: solid;
  border-width: 6px;
  box-shadow: #000000 0px 5px 20px 0px;
  color: #353840;
  display: inline-flex;
  flex-basis: 180px;
  font-size: 15px;
  line-height: 22.5px;
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  object-fit: cover;
  flex-shrink: 0;
  top: 180px;
  left: 30px;
`;
export const Sorthr = styled.div`
  margin-top: 50px;
  border-bottom: 1px solid #ccc;
`;

export const AppWrapper = styled.div`
  width: 100%;
  height: calc(100% - 540px);
  display: flex;
`;

export const Fillter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const FillterTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FillterTitleText = styled.strong`
  color: blue;
  cursor: pointer;
  opacity: 0.5;
`;

const App = () => {
  // const [data, setData] = useState<any[]>([]);
  const dataArray = getNFTSales();
  dataArray.then(result => {
    console.log(result, 'result');
    return result;
  });
  // console.log(dataArray, 'data');

  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper>
        <MainWrapper>
          {/* {dataAccount ? (
            <>
              <SortByLogo>
                <img
                  className='img__banner'
                  src={
                    // @ts-ignore
                    dataAccount.banner_image_url
                  }
                />
                <NftImg
                  src={
                    //@ts-ignore
                    dataAccount.image_url
                  }
                  alt=''
                />
              </SortByLogo>
              <Fillter></Fillter>
              <h1>
                {
                  //@ts-ignore
                  dataAccount.name
                }
              </h1>
              <FillterTitle>
                <div>
                  <span>by </span>

                  <FillterTitleText>
                    {
                      //@ts-ignore
                      dataAccount.name
                    }
                  </FillterTitleText>
                </div>

                <span>
                  {
                    //@ts-ignore
                    dataAccount.description
                  }
                </span>
              </FillterTitle>

              <Sorthr />
            </>
          ) : null} */}
          <AppWrapper>
            <NftGrid>
              {/* {data.map(
                (item: any, index: any) => (
                  console.log(item, 'AAA'),
                  (
                    <div key={index}>
                      <a href={item.permalink}>
                        <Nft>
                          <img className='img__nft__all' src={item.image_url} />
                          <NftTime>
                            <div className='curent___bid'>
                              <span>{item.name}</span>
                            </div>
                            <div className='curent___bid_price'>
                              <span>Price</span>
                              <div className='curent___bid__price'>
                                <img
                                  className='img__logo'
                                  src={item.image_coin}
                                  alt=''
                                />
                                <span>{item.total_price}</span>
                              </div>
                            </div>
                          </NftTime>
                          <Items>buy</Items>
                        </Nft>
                      </a>
                    </div>
                  )
                ),
              )} */}
            </NftGrid>
          </AppWrapper>
        </MainWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
function data(data: any) {
  throw new Error('Function not implemented.');
}
