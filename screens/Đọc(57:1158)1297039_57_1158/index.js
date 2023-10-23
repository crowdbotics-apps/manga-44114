import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_57_1916}>
        <Text style={styles.Text_57_1916}>
          Bầu trời xanh thẳm như một khối ngọc bích màu xanh lam thật lớn, mặt
          trời giữa hè như một quả cầu lửa lơ lửng trong khối ngọc bích khổng lồ
          này. Nhìn vị trí của mặt trời, có lẽ cũng đã quá ngọ chừng ba
          tiếng.Tại trường cao trung số 3 khu Nghi An.&quot;Reng
          reng...&quot;Tiếng chuông vang vọng khắp nơi, nhất thời cả sân trường
          vang lên những tiếng rào rào. Từ những phòng học trên các dãy lầu,
          hàng đoàn học sinh nối đuôi nhau tràn ra, tụm năm tụm ba cười nói đi
          về phía cửa. - La Phong sư huynh! La Phong sư huynh!Một giọng nói ồm
          ồm vang lên. - A Phong, có người gọi cậu kìa!Giữa đám học sinh, một
          thanh niên cùng đi với bạn học, cầm một bộ sách, mặc quần áo thể dục
          bình thường màu xanh lam, cao khoảng một thước bảy mươi lăm, có vẻ khá
          là cơ bắp. Lúc này hắn nghi hoặc quay đầu nhìn lại, chỉ thấy người gọi
          hắn là một nam sinh, cao khoảng một thước chín, lưng hùm vai gấu, cánh
          tay to lớn kinh người. - Cậu là ai?La Phong nghi hoặc nhìn người trước
          mắt, tỏ vẻ không quen biết. Hai người, một người cường tráng như một
          con gấu đen, còn &quot;La Phong sư huynh&quot; thì lại giống như người
          bình thường.Còn nói về chiều cao...Hai người này chênh lệch rất lớn,
          nhưng nam sinh lưng hùm vai gấu này lại có vẻ hơi thận trọng. Hắn nhìn
          &quot;La Phong sư huynh&quot; mà hắn sùng bái, thầm nghĩ: &quot;Có lẽ
          lời đồn là đúng, La Phong sư huynh rất dễ nói chuyện.&quot; - La Phong
          sư huynh, tôi... tôi có việc muốn nhờ sư huynh giúp đỡ. Nam sinh cường
          tráng thấp thỏm nói. - Chuyện gì?La Phong cười hỏi. - Lúc tôi luyện
          quyền, ra quyền phát kình luôn cảm giác có gì không ổn, không biết sư
          huynh có thời gian chỉ điểm một chút hay không? Nam sinh cường tráng
          này tiếp tục nói: - Theo như sư phụ của võ quán nói, với khí lực của
          tôi, theo lý thì một quyền có thể đánh ra lực đạo mạnh hơn 50%. Nhưng
          tôi ra quyền phát kình luôn không đạt đến mức như vậy. Nam sinh cường
          tráng mong đợi nhìn La Phong. - À, ra thế...La Phong hơi dừng lại một
          chút, rồi gật gù. - Như vậy đi, chủ nhật tuần này, vào buổi chiều
          ngươi hãy tới võ quán tìm ta! - Cảm ơn sư huynh! Cảm ơn sư huynh! Nam
          sinh cường tráng vội cảm tạ.La Phong cười cười, rồi cùng bạn học của
          mình rời khỏi.Đưa mắt nhìn theo La Phong rời đi, nam sinh cường tráng
          lộ ra vẻ hưng phấn, nắm chặt tay lại, gân xanh trên cánh tay nổi
          phồng, hưng phấn khẽ kêu một tiếng: - Thành công rồi! - La Phong sư
          huynh lại dễ dàng đáp ứng như vậy à? Một nam sinh mặc đồng phục kinh
          ngạc nói. - Lời đồn quả nhiên rất đúng, La Phong sư huynh rất dễ nói
          chuyện, con người huynh ấy cũng tốt.Nam sinh cường tráng cười nói. -
          Nhưng... trường trung học số 3 chúng ta có gần năm ngàn học sinh, tổng
          cộng cũng chỉ có ba người đạt được danh hiệu học viên cao cấp của võ
          quán. Trong ba đệ tử cấp cao, hai người kia là Trương Hạo Bạch và Liễu
          Đình đều rất kiêu ngạo, căn bản sẽ không lãng phí thời gian chỉ điểm
          cho chúng ta đâu.Nam sinh đồng phục nghi hoặc nói: - La Phong sư huynh
          tính tình tốt thế à?Vào thời này, trên thế giới, ở các khu của quốc
          gia, ngoài việc học văn hóa hầu hết mỗi một học sinh trung học đều gia
          nhập võ quán để khai phá tiềm lực bản thân. Trường cao trung số 3 khu
          Nghi An tổng cộng có gần năm ngàn học sinh trung học. Hầu hết đều là
          đệ tử sơ cấp của võ quán, chỉ có một số rất nhỏ là đệ tử trung cấp,
          còn đệ tử cấp cao thì tổng cộng chỉ có ba người đạt được. - Tai nghe
          có thể sai, mắt thấy mới là thật. Hừ hừ, thấy chưa, La Phong sư huynh
          khác với hai người kia. Nam sinh cường tráng nói:- Trương Hạo Bạch và
          Liễu Đình là con nhà phú hào, từ bé đã được gia đình bỏ ra vô số tiền
          bạc để bồi dưỡng, cho nên mới có thể mạnh như vậy. Còn La Phong sư
          huynh thì lại khác hẳn.Nam sinh mặc đồng phục cũng gật đầu: - Ta cũng
          nghe nói thế. La Phong sư huynh giống chúng ta, điều kiện kinh tế
          trong nhà bình thường, cũng chỉ ở phòng cho thuê giá rẻ. - Đúng, La
          Phong sư huynh có thể được như hôm nay hoàn toàn là nhờ vào khắc khổ
          tu luyện, dựa vào chính mình luyện ra từng quyền từng cước, so với hai
          người Trương Hạo Bạch...Nam sinh cường tráng nắm chặt nắm tay, hít sâu
          một hơi: - Mục tiêu của ta chính là được như La Phong sư huynh. Nhất
          định trong vòng bốn năm, trước khi tốt nghiệp đại học ta sẽ thông qua
          sát hạch của võ quán, đạt được danh hiệu &quot;đệ tử cấp
          cao&quot;.......Lúc này, trong khi bọn họ đàm luận, La Phong sư huynh
          đang cùng một nam sinh mặc quần áo thể dục theo dòng học sinh đi ra
          cổng trường trung học số 3. - A Phong! Chậc chậc, vừa rồi tên nam sinh
          to con nhờ ngươi chỉ điểm &quot;ra quyền phát kình&quot;, bây giờ vẫn
          còn ở đó khen ngươi với bạn đó. Nam sinh mặc quần áo thể dục không
          khỏi cười phá lên: - Khen ngươi là người tốt, còn khen ngươi dễ nói
          chuyện. La Phong cười cười: - Sao, Ngụy Văn, ngươi đố kị à?- Đố kị
          ngươi á? Ngụy Văn sờ mũi, cười hà hà nói: - Ngươi nằm mơ đi! Ta chỉ
          cảm thán là tên to con đó không biết được bộ mặt thật của &quot;La
          Phong sư huynh&quot; mà hắn kính nể thôi.{" "}
        </Text>
      </View>
      <View style={styles.View_57_1160}>
        <View style={styles.View_57_1161}>
          <View style={styles.View_57_1162}>
            <Text style={styles.Text_57_1162}>Dr. Stone</Text>
          </View>
          <View style={styles.View_57_1163}>
            <Text style={styles.Text_57_1163}>Chương 1: Ghét</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_68_1940}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("57_168"))
        }
      >
        <View style={styles.View_68_1941} />
        <View style={styles.View_68_1942}>
          <Text style={styles.Text_68_1942}>Chương tiếp</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76bce042-5186-4992-a301-723a0c1f1a8a"
          }}
          style={styles.ImageBackground_68_1951}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_68_1955}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("57_1096"))
        }
      >
        <View style={styles.View_68_1956} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/127aa4c8-5642-4773-8988-441c42c2db0e"
          }}
          style={styles.ImageBackground_68_1952}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49862278-2f55-4cb3-8ed0-36022a4c4c88"
          }}
          style={styles.ImageBackground_68_1953}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fc19c76-62d2-4632-bce8-0275627d2f53"
          }}
          style={styles.ImageBackground_68_1954}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_68_1946}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("44_128"))
        }
      >
        <View style={styles.View_68_1947} />
        <View style={styles.View_68_1948}>
          <Text style={styles.Text_68_1948}>Chương trước</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62563059-818e-47cd-8593-d757a99c33fe"
          }}
          style={styles.ImageBackground_68_1950}
        />
      </TouchableOpacity>
      <View style={styles.View_57_1221}>
        <View style={styles.View_68_1939} />
        <View style={styles.View_57_1223}>
          <TouchableOpacity
            style={styles.TouchableOpacity_57_1227}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("57_1096"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01d44ebd-e6a0-4abd-9467-bf5dcc163557"
              }}
              style={styles.ImageBackground_57_1228}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdab1ae5-bb27-4b2f-9b98-837aa370879a"
          }}
          style={styles.TouchableOpacity_57_1936}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("180_481"))
          }
        />
      </View>
      <View style={styles.View_57_1928}>
        <View style={styles.View_I57_1928_107_138} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/894cb0f5-105c-4c3e-8007-d8f83e745aba"
          }}
          style={styles.ImageBackground_I57_1928_36_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95c2f05d-40d8-4b70-9994-9dd110a0c5a7"
          }}
          style={styles.ImageBackground_I57_1928_36_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/231d857e-af60-4fdd-b518-3d553835d0ab"
          }}
          style={styles.ImageBackground_I57_1928_36_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1abf2ce0-37e4-4bb9-8ab3-d53146e9b2bd"
          }}
          style={styles.ImageBackground_I57_1928_36_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ff07749-d403-4c9f-a143-1111dc50e434"
          }}
          style={styles.ImageBackground_I57_1928_36_21}
        />
        <View style={styles.View_I57_1928_1_752}>
          <Text style={styles.Text_I57_1928_1_752}>19: 00</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("734%") },
  View_57_1916: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("201%"),
    justifyContent: "center"
  },
  Text_57_1916: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1160: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_1161: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  View_57_1162: {
    width: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_1162: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1163: {
    width: wp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_57_1163: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_68_1940: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("723%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_68_1941: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 138, 126, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0
  },
  View_68_1942: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_68_1942: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_68_1951: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  TouchableOpacity_68_1955: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("723%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_68_1956: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 138, 126, 1)"
  },
  ImageBackground_68_1952: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_68_1953: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_68_1954: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_68_1946: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("723%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_68_1947: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 138, 126, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 50
  },
  View_68_1948: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_68_1948: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_68_1950: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_57_1221: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_68_1939: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 252, 252, 1)"
  },
  View_57_1223: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  TouchableOpacity_57_1227: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_57_1228: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  TouchableOpacity_57_1936: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_57_1928: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I57_1928_107_138: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I57_1928_36_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I57_1928_36_18: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  ImageBackground_I57_1928_36_19: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%")
  },
  ImageBackground_I57_1928_36_20: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I57_1928_36_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  View_I57_1928_1_752: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I57_1928_1_752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
