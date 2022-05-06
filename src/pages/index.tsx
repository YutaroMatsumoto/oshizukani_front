import 'twin.macro'
import { useEffect, useState } from 'react'
import NowMtg from 'src/components/organisms/home/NowMtg'
import { getIsNowMtg } from 'src/utils/api'
import { Loading } from 'src/components/organisms/home/Loading'

// import { SuggestUserRegistration } from 'src/components/organisms/home/SuggestUserRegistration'
// import { SuggestApiLink } from 'src/components/organisms/home/SuggestApiLink'

const Home = () => {
  // const [isUserRegistered, setIsUserRegistered] = useState<boolean>(true)
  // const [isApiLinked, setIsApiLinked] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isMtg, setIsMtg] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(true)

  const getMtg = () => {
    setIsError(false)
    getIsNowMtg()
      .then((res) => {
        setIsError(false)
        console.log('status：', res.status)
        setIsMtg(res.data.isMtg)
        setIsLoading(false)
      })
      .catch((e) => {
        console.log('エラーが発生しました。')
        console.log(e)
        setIsError(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setInterval(getMtg, 30000) //　TODO: 何秒に一度実行するか吟味
    isLoading && getMtg()
  }, [])

  return isLoading ? <Loading /> : <NowMtg isMtg={isMtg} isError={isError} />

  // --- 現段階では以下の分岐は不要 ---
  // if (isUserRegistered) {
  //   if (isApiLinked) {
  //     return <NowMtg isMtg={isMtg} />
  //   } else {
  //     return <SuggestApiLink />
  //   }
  // } else {
  //   return <SuggestUserRegistration />
  // }
}

export default Home
