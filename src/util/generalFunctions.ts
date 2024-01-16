export const convertToKorM = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num;
    }
  }
  
export const getBase64Image = (bufferData: any) => {
    const buffer = new Uint8Array(bufferData.data);
    let binary = '';
    for (let byte of buffer) {
      binary += String.fromCharCode(byte);
    }
    const base64 = window.btoa(binary);
    return `data:image/jpeg;base64,${base64}`;
  };