import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

function WifiQRCodeGenerator() {
  const [ssid, setSsid] = useState('')
  const [password, setPassword] = useState('')
  const [authType, setAuthType] = useState('WPA')
  const [size, setSize] = useState('256')
  const [isHidden, setIsHidden] = useState(true) // 비밀번호 숨김 설정

  // QR 코드에 포함될 WiFi 설정 정보
  const generateWifiQRCodeValue = () => {
    return `WIFI:T:${authType};S:${ssid};P:${password};;`
  }

  return (
    <div className='mx-auto flex flex-col justify-start items-center py-8 gap-6'>
      <h1 className='text-2xl'>WiFi QR Code Generator</h1>
      <div className='w-[400px] relative flex justify-between items-center gap-4'>
        <label className='w-[80px]'>SSID</label>
        <input
          className='border-gray-400 border rounded py-2 px-4 flex-1'
          type='text'
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
          placeholder='Enter WiFi SSID'
        />
      </div>
      <div className='w-[400px] relative flex justify-between items-center gap-4'>
        <label className='w-[80px]'>Password</label>
        <input
          className='border-gray-400 border rounded py-2 pl-4 pr-8 flex-1'
          type={isHidden ? 'password' : 'text'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter WiFi Password'
        />
        <button className='absolute right-1' onClick={() => setIsHidden((prev) => !prev)}>
          {isHidden ? <IoMdEyeOff size={18} /> : <IoMdEye size={18} />}
        </button>
      </div>
      <div className='w-[400px] relative flex justify-between items-center gap-4'>
        <label className='w-[80px]'>Auth Type</label>
        <input
          className='border-gray-400 border rounded py-2 px-4 flex-1'
          type='text'
          value={authType}
          onChange={(e) => setAuthType(e.target.value)}
          placeholder='WPA, WEP, etc.'
        />
      </div>
      <div className='w-[400px] relative flex justify-between items-center gap-4'>
        <label className='w-[80px]'>Size</label>
        <input
          className='border-gray-400 border rounded py-2 px-4 flex-1'
          type='text'
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder='QR Code Size in pixel'
        />
        <span>pixels</span>
      </div>
      {ssid && password && authType ? (
        <QRCodeCanvas
          value={generateWifiQRCodeValue()}
          size={Number(size) || 256}
          level={'H'}
        />
      ) : null}
    </div>
  )
}

export default WifiQRCodeGenerator
