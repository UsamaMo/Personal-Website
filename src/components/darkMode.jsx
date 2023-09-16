import  {useEffect} from 'react'
import { themeChange } from 'theme-change'

const useDarkMode = () => {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
        
      }, [])
      
}

export default useDarkMode