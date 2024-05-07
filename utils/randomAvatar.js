import Identicon from 'identicon.js';
import md5 from 'blueimp-md5';
// 返回指定范围 [min,max] 的随机整数
export function getRandomInt(min, max)  {
	min = Math.ceil(min);
	max = Math.floor(max);
	return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

export function randomAvatarUrl(size) {
    // if (this.isNeedRandom) {
        const randomInt = getRandomInt(1, 99999999999);
        return 'data:image/png;base64,' + new Identicon(md5(randomInt), size).toString();
    // } else {
        // const options = {
        //     foreground: this.avatarColor,
        //     background: this.avatarBgColor,
        //     margin: this.avatarPadding,
        //     size: this.avatarSize,
        //     format: this.avatarType
        // };
        // const dataType = this.avatarType === 'svg' ? 'svg+xml' : 'png';
        // this.avatarUrl = `data:image/${dataType};base64,` + new Identicon(md5(this.avatarNum), options)
        //     .toString();
    // }
}