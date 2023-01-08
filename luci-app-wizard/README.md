设置向导
## 访问数：[![](https://visitor-badge.glitch.me/badge?page_id=sirpdboy-visitor-badge)] [![](https://img.shields.io/badge/TG群-点击加入-FFFFFF.svg)](https://t.me/joinchat/AAAAAEpRF88NfOK5vBXGBQ)

![screenshots](https://raw.githubusercontent.com/sirpdboy/openwrt/master/doc/说明1.jpg)

### 源码仓库：  

## git clone  https://github.com/sirpdboy/luci-app-wizard

## 2022.7.24  设置向导 更新日志：

 1。升级设置向导1.4
 
 2. 更新兼容1907以上版本，彻底解决设置端口不兼容问题。
 
## 2022.7.17  设置向导 更新日志：

 1。升级设置向导1.3
 
 2. 增加物理接口选择，彻底解决设置冲突问题。
 
 3. 更新禁用功能，选择后插件设置不生效。


## 2022.7.7  设置向导 更新日志：

 1。 升级设置向导1.2 
 
 2.  增加自动判断设置网卡，路由模式最后一个网卡为WAN口，其它口为LAN口。 旁路由模式将绑定全部网卡为LAN口。
 
 4.  修复IPV6 有时候修改不生效问题。
 
 
## 2022.6.10  设置向导 更新日志：

 1。 升级设置向导1.1 
 
 2.  增加旁路由和IPV6功能。
 
 3.  在原版的基本上重写代码和界面分布功能。
 
 ### 下载源码方法:

 ```Brach
 
    # 下载源码
	
    git clone https://github.com/sirpdboy/luci-app-wizard package/luci-app-wizard
    make menuconfig
	
 ``` 
### 配置菜单

 ```Brach
    make menuconfig
	# 找到 LuCI -> Applications, 选择 luci-app-wizard, 保存后退出。
 ``` 
 
### 编译

 ```Brach 
    # 编译固件
    make package/luci-app-wizard/compile V=s
 ```
 
 ## 界面

![screenshots](https://raw.githubusercontent.com/sirpdboy/openwrt/master/doc/wizard1.jpg)

![screenshots](https://raw.githubusercontent.com/sirpdboy/openwrt/master/doc/wizard2.jpg)

![screenshots](https://raw.githubusercontent.com/sirpdboy/openwrt/master/doc/wizard3.jpg)


---------------
 ![screenshots](https://raw.githubusercontent.com/sirpdboy/openwrt/master/doc/说明2.jpg)
 
 致谢：
 
x-wrt：https://github.com/x-wrt/com.x-wrt/tree/master/luci-app-wizard

kiddin9：https://github.com/kiddin9/luci-app-wizard

# My other project

网络速度测试 ：https://github.com/sirpdboy/NetSpeedTest     <img src="https://img.shields.io/github/downloads/sirpdboy/NetSpeedTest/total.svg?style=for-the-badge&color=32C955"/>

定时设置插件 : https://github.com/sirpdboy/luci-app-autotimeset

关机功能插件 : https://github.com/sirpdboy/luci-app-poweroffdevice

opentopd主题 : https://github.com/sirpdboy/luci-theme-opentopd

opentoks 主题: https://github.com/sirpdboy/luci-theme-opentoks [仿KOOLSAHRE主题]

btmob 主题: https://github.com/sirpdboy/luci-theme-btmob

系统高级设置 : https://github.com/sirpdboy/luci-app-advanced

ddns-go动态域名: https://github.com/sirpdboy/luci-app-ddns-go     <img src="https://img.shields.io/github/downloads/sirpdboy/luci-app-ddns-go/total.svg?style=for-the-badge&color=32C955"/>

lucky大吉: https://github.com/sirpdboy/luci-app-lucky     <img src="https://img.shields.io/github/downloads/sirpdboy/luci-app-lucky/total.svg?style=for-the-badge&color=32C955"/>

一键扩容：https://github.com/sirpdboy/luci-app-partexp    <img src="https://img.shields.io/github/downloads/sirpdboy/luci-app-partexp/total.svg?style=for-the-badge&color=32C955"/>

网络设置向导：https://github.com/sirpdboy/luci-app-wizard    <img src="https://img.shields.io/github/downloads/sirpdboy/luci-app-wizard/total.svg?style=for-the-badge&color=32C955"/>
## 捐助

![screenshots](https://raw.githubusercontent.com/sirpdboy/openwrt/master/doc/说明3.jpg)

|     <img src="https://img.shields.io/badge/-支付宝-F5F5F5.svg" href="#赞助支持本项目-" height="25" alt="图飞了😂"/>  |  <img src="https://img.shields.io/badge/-微信-F5F5F5.svg" height="25" alt="图飞了😂" href="#赞助支持本项目-"/>  | 
| :-----------------: | :-------------: |
|![xm1](https://raw.githubusercontent.com/sirpdboy/openwrt/master/doc/支付宝.png) | ![xm1](https://raw.githubusercontent.com/sirpdboy/openwrt/master/doc/微信.png) |

<a href="#readme">
    <img src="https://img.shields.io/badge/-返回顶部-orange.svg" alt="图飞了😂" title="返回顶部" align="right"/>
</a>

