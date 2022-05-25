export const getSigns=()=>{
    return fetch('http://sandipbgt.com/theastrologer/api/sunsigns/').then(
        (res)=>res.json()
    );
};

export const getHoroscopeData=(sign,timeframe)=>{
    return fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}/`).then(
        (res)=>res.json()
        .then(({horoscope})=>horoscope)
    )
}