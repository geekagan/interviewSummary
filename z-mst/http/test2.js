// HTTP之URL
/*
HTTP使用统一资源标识符(Uniform Resource Identifiers, URI)来传递数据和建立连接。
URL是一种特殊的URI, 包含了用于查找某个资源的足够的信息；
URL，全称是 UniformResourceLocator，中文叫 统一资源定位符，是互联网上用来标识某一资源的地址。

以下面这个URL为例，介绍下普通URL的各部分组成：
http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name

从上面的URL可以看出，一个完整的URL包括以下几部分：
1.协议部分：该URL的协议部分为 "http:",这代表网页使用的是HTTP协议。
			在Internet中可以使用多种协议，如HTTP，FTP等等本例中使用的是HTTP协议。
			在 "HTTP:"后面的"//"为分隔符；

2.域名部分：该URL的域名部分为"www.aspxfans.com".一个URL中，也可以使用IP地址作为域名使用。

3.端口部分：跟在域名部分后面的是端口，域名和端口之间使用 ":"作为分隔符。
			端口不是一个 URL必须的部分，如果省略端口部分，将采用默认端口。

4.虚拟目录部分：从域名后的第一个 "/"开始到最后一个 "/"为止，是虚拟目录部分。
				虚拟目录也不是 URL必须的部分。本例中的虚拟目录是 "/news/"。

5.文件名部分：从域名后的最后一个 "/"开始到 "?"为止，是文件名部分；
			  如果没有 "?",则从域名后的最后一个 "/"开始到 "#"为止，是文件名部分；
			  如果没有 "?"和 "#",则从域名后的最后一个 "/"开始到最后为止，是文件名部分；

6.锚部分：从 "#"开始到最后，都是锚部分。本例中的锚部分是 "name"。锚部分也不是 URL必须的部分；

7.参数部分： 从 "?"开始到 "#"为止之间的部分为参数部分，又称为搜索部分、搜索部分。
			本例中的参数部分为 "boardID=5&ID=24618&page=1"。
			参数可以允许有多个参数，参数与参数之间用 "&"作为分隔符。
 */