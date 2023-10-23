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
      <View style={styles.View_203_24}>
        <View style={styles.View_203_26}>
          <View style={styles.View_203_27}>
            <Text style={styles.Text_203_27}>Tóm tắt nội dung</Text>
          </View>
        </View>
        <View style={styles.View_203_25}>
          <Text style={styles.Text_203_25}>
            Hinata Shouyou, một học sinh cấp 2 ấp ủ mong ước trở thành một vận
            động viên bóng chuyền sau khi xem một trận đấu bóng chuyền trên TV
            hồi tiểu học. Tiếc thay, ngay trận đầu tiên của vòng loại, Shouyou
            gặp phải Kageyama Tobio, người được mệnh danh “Vua sân đấu”. Mặc dù
            đội bóng của cậu đã bị loại nhưng Shouyou vẫn cố gắng luyện tập để
            có ngày phục thù Kageyama. Lên cấp 3, cậu theo học trường Cao trung
            Karasuno và gia nhập CLB bóng chuyền, nhưng không ngờ gặp lại
            Kageyama, và lần này họ sẽ là đồng đội của nhau.
          </Text>
        </View>
      </View>
      <View style={styles.View_203_199}>
        <View style={styles.View_203_229}>
          <Text style={styles.Text_203_229}>Thể loại tương tự</Text>
        </View>
        <View style={styles.View_203_230}>
          <View style={styles.View_57_1075}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/993ae257-24b9-4db8-b70a-fd9cdcc72be2"
              }}
              style={styles.ImageBackground_57_1076}
            />
            <View style={styles.View_57_1077}>
              <Text style={styles.Text_57_1077}>Dị Giới</Text>
            </View>
          </View>
          <View style={styles.View_57_1078}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74d81313-496b-4f78-8de3-e6742f59b86b"
              }}
              style={styles.ImageBackground_57_1079}
            />
            <View style={styles.View_57_1080}>
              <Text style={styles.Text_57_1080}>Huyền huyễn</Text>
            </View>
          </View>
          <View style={styles.View_57_1081}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c26b94a-6518-4b82-8be4-63639932e493"
              }}
              style={styles.ImageBackground_57_1082}
            />
            <View style={styles.View_57_1083}>
              <Text style={styles.Text_57_1083}>Tiên hiệp</Text>
            </View>
          </View>
          <View style={styles.View_57_1084}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/610a97db-6b0a-41ed-98c1-8c4a4d293127"
              }}
              style={styles.ImageBackground_57_1085}
            />
            <View style={styles.View_57_1086}>
              <Text style={styles.Text_57_1086}>Hệ thống</Text>
            </View>
          </View>
          <View style={styles.View_57_1087}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46cf6136-b169-4747-a08c-469ab7a085d2"
              }}
              style={styles.ImageBackground_57_1088}
            />
            <View style={styles.View_57_1089}>
              <Text style={styles.Text_57_1089}>Sắc hiệp</Text>
            </View>
          </View>
          <View style={styles.View_57_1090}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d15ee14-7d18-474d-b620-bb4e7a1f7a87"
              }}
              style={styles.ImageBackground_57_1091}
            />
            <View style={styles.View_57_1092}>
              <Text style={styles.Text_57_1092}>Khoa huyễn</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_203_291}>
        <View style={styles.View_203_292}>
          <View style={styles.View_I203_292_96_57}>
            <Text style={styles.Text_I203_292_96_57}>Tác phẩm liên quan</Text>
          </View>
          <View style={styles.View_I203_292_105_39}>
            <Text style={styles.Text_I203_292_105_39}>Tất cả</Text>
          </View>
        </View>
        <View style={styles.View_203_293}>
          <View style={styles.View_203_294}>
            <View style={styles.View_203_295}>
              <Text style={styles.Text_203_295}>JujutsuKaisen</Text>
            </View>
            <View style={styles.View_203_296}>
              <Text style={styles.Text_203_296}>Yuji</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86b3d783-a85f-49ed-9acc-d5a6823eb9af"
              }}
              style={styles.ImageBackground_203_297}
            />
          </View>
          <View style={styles.View_203_298}>
            <View style={styles.View_203_299}>
              <Text style={styles.Text_203_299}>Dr Stone 2</Text>
            </View>
            <View style={styles.View_203_300}>
              <Text style={styles.Text_203_300}>Sakamoto</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0b3c81e-5547-453a-8ad4-ac7411e3a6d3"
              }}
              style={styles.ImageBackground_203_301}
            />
          </View>
          <View style={styles.View_203_302}>
            <View style={styles.View_203_303}>
              <Text style={styles.Text_203_303}>My Hero Academia</Text>
            </View>
            <View style={styles.View_203_304}>
              <Text style={styles.Text_203_304}>Buku</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5255fb71-2b3d-4e00-96eb-cd0200afc660"
              }}
              style={styles.ImageBackground_203_305}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_203_279}>
        <View style={styles.View_203_280}>
          <View style={styles.View_I203_280_96_57}>
            <Text style={styles.Text_I203_280_96_57}>Tác giả liên quan</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I203_280_105_39}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("159_926"))
            }
          >
            <Text style={styles.Text_I203_280_105_39}>Tất cả</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.View_203_281}>
          <View style={styles.View_203_282}>
            <View style={styles.View_203_283}>
              <Text style={styles.Text_203_283}>Kiendeeptry</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1afdef8-f5b3-4ce4-b690-d22c28f49412"
              }}
              style={styles.ImageBackground_203_284}
            />
          </View>
          <View style={styles.View_203_285}>
            <View style={styles.View_203_286}>
              <Text style={styles.Text_203_286}>Drizzle</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd1786ac-c6c1-45c8-8b12-c296819f56a4"
              }}
              style={styles.ImageBackground_203_287}
            />
          </View>
          <View style={styles.View_203_288}>
            <View style={styles.View_203_289}>
              <Text style={styles.Text_203_289}>HuyDnag</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a16f7000-ef42-45e7-8a1c-8462dbe51bdf"
              }}
              style={styles.ImageBackground_203_290}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_204_9}>
        <View style={styles.View_204_23}>
          <View style={styles.View_204_24}>
            <Text style={styles.Text_204_24}>Xếp hạng tác phẩn này</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_204_10}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("222_918"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e17a2be-b4dc-4714-8ef7-c983f3183740"
            }}
            style={styles.ImageBackground_204_11}
          />
          <View style={styles.View_204_21}>
            <Text style={styles.Text_204_21}>Viết đánh giá</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_203_333}>
        <View style={styles.View_203_327}>
          <View style={styles.View_203_328}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4365893-0978-46b2-b3b9-6fe8e78a0ec2"
              }}
              style={styles.ImageBackground_203_329}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ae44f51-c859-402c-9956-1846b2bdfce7"
              }}
              style={styles.ImageBackground_203_334}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d2a51ce-6c90-4881-acbf-e914db50c7f3"
              }}
              style={styles.ImageBackground_203_335}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41f1c784-8f42-47a6-b722-ef2099e822c7"
              }}
              style={styles.ImageBackground_203_336}
            />
            <View style={styles.View_203_349}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67a2c30d-4fd7-40d8-a80d-035eb362a4cd"
                }}
                style={styles.ImageBackground_204_2}
              />
              <View style={styles.View_204_3}>
                <View style={styles.View_203_342} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1564a752-590e-401d-9efe-1aa3d3d19115"
                  }}
                  style={styles.ImageBackground_203_337}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_203_331}>
            <Text style={styles.Text_203_331}>999 lượt đánh giá</Text>
          </View>
          <View style={styles.View_203_330}>
            <Text style={styles.Text_203_330}>4.4</Text>
          </View>
        </View>
        <View style={styles.View_204_4}>
          <View style={styles.View_204_5}>
            <Text style={styles.Text_204_5}>Xếp hạng và đánh giá</Text>
          </View>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81edbb83-b2b6-47f0-98a8-be933cd07e93"
            }}
            style={styles.TouchableOpacity_204_6}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("222_984"))
            }
          />
        </View>
      </View>
      <View style={styles.View_203_139}>
        <View style={styles.View_203_140} />
        <View style={styles.View_203_141}>
          <TouchableOpacity
            style={styles.TouchableOpacity_203_142}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("180_481"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6ff47a1-d184-43ea-afef-99c7e1dea75b"
              }}
              style={styles.ImageBackground_203_143}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_203_163}>
        <View style={styles.View_I203_163_107_138} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2007cb4-f213-4e3f-865f-cba0fe77907b"
          }}
          style={styles.ImageBackground_I203_163_36_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3df1d895-0b1e-4b49-a494-b1becbd94f42"
          }}
          style={styles.ImageBackground_I203_163_36_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a89bb058-79a4-4024-8eab-2ec5d011dd50"
          }}
          style={styles.ImageBackground_I203_163_36_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec0cb3ee-73c8-4543-8ab1-dc34ff4e6616"
          }}
          style={styles.ImageBackground_I203_163_36_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03503ea0-e756-4f18-b167-dfc4091576a8"
          }}
          style={styles.ImageBackground_I203_163_36_21}
        />
        <View style={styles.View_I203_163_1_752}>
          <Text style={styles.Text_I203_163_1_752}>19: 00</Text>
        </View>
      </View>
      <View style={styles.View_203_164}>
        <View style={styles.View_I203_164_99_335} />
        <View style={styles.View_I203_164_9_4285}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I203_164_9_4286}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_1024"))
            }
          >
            <View style={styles.View_I203_164_9_4287}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e96a14e8-fb7b-4c73-99fc-543ccb5ba20b"
                }}
                style={styles.ImageBackground_I203_164_9_4288}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I203_164_9_4291}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_663"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I203_164_9_4297}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_0"))
            }
          >
            <View style={styles.View_I203_164_9_4298}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f77c595-5925-4682-aafb-a089d71880f3"
                }}
                style={styles.ImageBackground_I203_164_9_4299}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I203_164_9_4302}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("57_168"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4983f81-7c1b-42dd-b923-93ad698e64cc"
              }}
              style={styles.ImageBackground_I203_164_57_1237}
            />
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c08953a-bf09-47b7-b000-fd616e46421c"
            }}
            style={styles.ImageBackground_I203_164_9_4304}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be8edc47-edef-4da8-9b0a-3f01458d2668"
          }}
          style={styles.ImageBackground_I203_164_99_336}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("216%") },
  View_203_24: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_26: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_27: {
    width: wp("71%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_203_27: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_25: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_203_25: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_199: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_229: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_229: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_230: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_1075: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%")
  },
  ImageBackground_57_1076: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_1077: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1077: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1078: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  ImageBackground_57_1079: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_1080: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1080: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1081: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_57_1082: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_1083: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1083: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1084: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("147%"),
    top: hp("0%")
  },
  ImageBackground_57_1085: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_1086: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1087: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117%"),
    top: hp("0%")
  },
  ImageBackground_57_1088: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_1089: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1089: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1090: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%")
  },
  ImageBackground_57_1091: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_1092: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1092: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_291: {
    width: wp("115%"),
    minWidth: wp("115%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("123%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_292: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_292_96_57: {
    flexGrow: 1,
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_292_96_57: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_292_105_39: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I203_292_105_39: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_293: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_294: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  View_203_295: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_203_295: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_296: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    justifyContent: "center"
  },
  Text_203_296: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_297: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_298: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_203_299: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_203_299: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_300: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_203_300: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_301: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_302: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_303: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_203_303: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_304: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    justifyContent: "center"
  },
  Text_203_304: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_305: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_279: {
    width: wp("115%"),
    minWidth: wp("115%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("170%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_280: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_280_96_57: {
    flexGrow: 1,
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_280_96_57: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I203_280_105_39: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I203_280_105_39: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_281: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_282: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  View_203_283: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_283: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_284: {
    width: wp("35%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_285: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_203_286: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_286: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_287: {
    width: wp("35%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_288: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_289: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_289: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_290: {
    width: wp("35%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_204_9: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_204_23: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_204_24: {
    width: wp("71%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_204_24: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_204_10: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  ImageBackground_204_11: {
    width: wp("56%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_204_21: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_204_21: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_333: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_327: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_203_328: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_203_329: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_203_334: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_203_335: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_203_336: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_203_349: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  ImageBackground_204_2: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_204_3: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_342: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_203_337: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_331: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_203_331: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_330: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_330: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_4: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_204_5: {
    width: wp("71%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_204_5: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_204_6: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_203_139: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_140: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_203_141: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  TouchableOpacity_203_142: {
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
  ImageBackground_203_143: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_203_163: {
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
  View_I203_163_107_138: {
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
  ImageBackground_I203_163_36_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I203_163_36_18: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  ImageBackground_I203_163_36_19: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%")
  },
  ImageBackground_I203_163_36_20: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I203_163_36_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  View_I203_163_1_752: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I203_163_1_752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_164: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_164_99_335: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_I203_164_9_4285: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  TouchableOpacity_I203_164_9_4286: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_164_9_4287: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_164_9_4288: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_I203_164_9_4291: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I203_164_9_4297: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_164_9_4298: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_164_9_4299: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_I203_164_9_4302: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_164_57_1237: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I203_164_9_4304: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_I203_164_99_336: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
