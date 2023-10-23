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
      <View style={styles.View_184_38}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53f28deb-d6bf-4cf1-a450-1925e1e1cf23"
          }}
          style={styles.ImageBackground_183_2}
        />
        <View style={styles.View_183_17}>
          <View style={styles.View_183_7}>
            <Text style={styles.Text_183_7}>Dr.Stone</Text>
          </View>
          <View style={styles.View_183_11}>
            <Text style={styles.Text_183_11}>Manga</Text>
          </View>
          <View style={styles.View_183_8}>
            <Text style={styles.Text_183_8}>Buku</Text>
          </View>
          <View style={styles.View_336_169}>
            <View style={styles.View_336_170} />
            <View style={styles.View_336_171}>
              <Text style={styles.Text_336_171}>Ưu đãi giảm 1%</Text>
            </View>
          </View>
          <View style={styles.View_336_179}>
            <View style={styles.View_183_47}>
              <TouchableOpacity
                style={styles.TouchableOpacity_183_43}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("235_0"))
                }
              >
                <View style={styles.View_183_44} />
                <View style={styles.View_183_45}>
                  <Text style={styles.Text_183_45}> 49,500 VND </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_183_49}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67b7f940-d082-4874-bef7-b3ab11b5e4ca"
                  }}
                  style={styles.ImageBackground_183_48}
                />
                <View style={styles.View_183_46}>
                  <Text style={styles.Text_183_46}>50,00 VND</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_184_5}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("250_605"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/230aa2a5-6622-4afe-88b1-01ffe75dd807"
                }}
                style={styles.ImageBackground_184_6}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_184_39}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("203_0"))
        }
      >
        <View style={styles.View_184_29}>
          <View style={styles.View_184_30}>
            <Text style={styles.Text_184_30}>Tóm tắt nội dung</Text>
          </View>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccda1eed-c796-4992-86e4-99cfdfd13caf"
            }}
            style={styles.TouchableOpacity_184_32}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("203_0"))
            }
          />
        </View>
        <View style={styles.View_184_40}>
          <Text style={styles.Text_184_40}>
            Hinata Shōyō, một học sinh cấp 2 đã ấp ủ ước mơ trở thành vận động
            viên bóng chuyền sau khi tình cờ xem trên TV Câu lạc bộ Bóng chuyền
            THPT Karasuno giành lấy chiến thắng ở vòng loại tiến vào Giải Bóng
            chuyền Thiếu niên Quốc gia.
          </Text>
        </View>
        <View style={styles.View_184_75}>
          <View style={styles.View_184_62}>
            <View style={styles.View_184_66}>
              <Text style={styles.Text_184_66}>Tình trạng</Text>
            </View>
            <View style={styles.View_184_67}>
              <Text style={styles.Text_184_67}>Hoàn thành</Text>
            </View>
          </View>
          <View style={styles.View_184_54}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/763d1db9-bfac-4474-810e-14b81584dc04"
              }}
              style={styles.ImageBackground_184_59}
            />
            <View style={styles.View_184_57}>
              <Text style={styles.Text_184_57}>125</Text>
            </View>
            <View style={styles.View_184_58}>
              <Text style={styles.Text_184_58}>trang</Text>
            </View>
          </View>
          <View style={styles.View_184_53}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b500be78-3bd3-4eec-95b4-6c1145118e56"
              }}
              style={styles.ImageBackground_184_50}
            />
            <View style={styles.View_184_48}>
              <Text style={styles.Text_184_48}>4.2</Text>
            </View>
            <View style={styles.View_184_49}>
              <Text style={styles.Text_184_49}>308 đánh giá</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7be9107d-b99b-480a-b73a-d94d5719ade8"
            }}
            style={styles.ImageBackground_184_77}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfeca6f7-efa1-4a4f-8d21-4c08ee289b1c"
            }}
            style={styles.ImageBackground_184_79}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_184_80}>
        <View style={styles.View_184_130}>
          <View style={styles.View_184_131}>
            <Text style={styles.Text_184_131}>Chương có sẵn</Text>
          </View>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c38d56a-8a6e-40d0-8dfb-d57ed3bb9389"
            }}
            style={styles.TouchableOpacity_184_137}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_608"))
            }
          />
        </View>
        <View style={styles.View_184_208}>
          <View style={styles.View_184_83}>
            <View style={styles.View_184_84}>
              <Text style={styles.Text_184_84}>
                Chương 11: Đồng minh mạnh nhất - End
              </Text>
            </View>
            <View style={styles.View_184_85}>
              <Text style={styles.Text_184_85}>4 tháng trước</Text>
            </View>
          </View>
          <View style={styles.View_184_92}>
            <View style={styles.View_184_93}>
              <Text style={styles.Text_184_93}>
                Chương 10: Không bao giờ bỏ cuộc
              </Text>
            </View>
            <View style={styles.View_184_94}>
              <Text style={styles.Text_184_94}>5 tháng trước</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e94cbb2f-e132-497d-879c-ae3b5e43f3f8"
              }}
              style={styles.ImageBackground_204_39}
            />
          </View>
          <View style={styles.View_184_101}>
            <View style={styles.View_184_102}>
              <Text style={styles.Text_184_102}>
                Chương 9: Nỗi buồn của hồi kết
              </Text>
            </View>
            <View style={styles.View_184_103}>
              <Text style={styles.Text_184_103}>6 tháng trước</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9ef8320-ea27-4e0e-9422-49ce7d3b28ad"
              }}
              style={styles.ImageBackground_204_38}
            />
          </View>
          <View style={styles.View_184_110}>
            <View style={styles.View_184_111}>
              <Text style={styles.Text_184_111}>Chương 8: Lồng chim</Text>
            </View>
            <View style={styles.View_184_112}>
              <Text style={styles.Text_184_112}>7 tháng trước</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f56c48f-7589-49e8-a887-1863a8beb172"
              }}
              style={styles.ImageBackground_204_37}
            />
          </View>
          <View style={styles.View_184_119}>
            <View style={styles.View_184_120}>
              <Text style={styles.Text_184_120}>Chương 7: Xui khiến</Text>
            </View>
            <View style={styles.View_184_121}>
              <Text style={styles.Text_184_121}>8 tháng trước</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e43c79c9-f4ca-4469-8a2f-ae876039b998"
              }}
              style={styles.ImageBackground_204_36}
            />
          </View>
          <View style={styles.View_184_163}>
            <View style={styles.View_184_209} />
            <View style={styles.View_184_164}>
              <Text style={styles.Text_184_164}>Chương 6: Kìm và kiếm</Text>
            </View>
            <View style={styles.View_184_165}>
              <Text style={styles.Text_184_165}>9 tháng trước</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22b8fe29-f148-4ffb-a46a-5468a2a45e9d"
              }}
              style={styles.ImageBackground_204_35}
            />
          </View>
          <View style={styles.View_184_173}>
            <View style={styles.View_184_174}>
              <Text style={styles.Text_184_174}>Chương 5: Cứng đầu</Text>
            </View>
            <View style={styles.View_184_175}>
              <Text style={styles.Text_184_175}>10 tháng trước</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea21651a-d097-418d-baa4-9de6f0a2f3f1"
              }}
              style={styles.ImageBackground_204_34}
            />
          </View>
          <View style={styles.View_184_180}>
            <View style={styles.View_184_181}>
              <Text style={styles.Text_184_181}>Chương 4: Nhắm mục tiêu</Text>
            </View>
            <View style={styles.View_184_182}>
              <Text style={styles.Text_184_182}>1 năm trước</Text>
            </View>
            <View style={styles.View_184_183} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bb1a52e-189d-4d38-a75d-b10967f61e38"
              }}
              style={styles.ImageBackground_204_33}
            />
          </View>
          <View style={styles.View_184_187}>
            <View style={styles.View_184_188}>
              <Text style={styles.Text_184_188}>Chương 3: Tiến một bước</Text>
            </View>
            <View style={styles.View_184_189}>
              <Text style={styles.Text_184_189}>1 năm trước</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/925fcbef-4402-4e52-bd62-64bbe5a4ebf7"
              }}
              style={styles.ImageBackground_204_32}
            />
          </View>
          <View style={styles.View_184_194}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0800e7a-9e47-4a5d-a941-8c744fb92453"
              }}
              style={styles.ImageBackground_204_31}
            />
            <View style={styles.View_184_199}>
              <Text style={styles.Text_184_199}>Chương 2: Cách để ghi bàn</Text>
            </View>
            <View style={styles.View_184_200}>
              <Text style={styles.Text_184_200}>1 năm trước</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_184_201}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("57_1158"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87f96ceb-032f-46a8-b0e6-644e143510af"
              }}
              style={styles.ImageBackground_204_30}
            />
            <View style={styles.View_184_213}>
              <View style={styles.View_184_214} />
              <View style={styles.View_184_215}>
                <Text style={styles.Text_184_215}>Miễn phí</Text>
              </View>
            </View>
            <View style={styles.View_184_206}>
              <Text style={styles.Text_184_206}>Chương 1: Ghét</Text>
            </View>
            <View style={styles.View_184_207}>
              <Text style={styles.Text_184_207}>1 năm trước</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_180_571}>
        <View style={styles.View_184_25} />
        <View style={styles.View_184_35}>
          <TouchableOpacity
            style={styles.TouchableOpacity_180_572}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("126_474"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02c7482e-b3cb-4f03-a6f9-8754f8df2db4"
              }}
              style={styles.ImageBackground_180_573}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_184_11}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("152_0"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbf292c6-2632-4dd8-a1a4-ce167af8e90d"
              }}
              style={styles.ImageBackground_184_12}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_183_3}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("126_203"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92d97f60-5fb0-4000-ac49-9c2bc81368b7"
              }}
              style={styles.ImageBackground_183_4}
            />
          </TouchableOpacity>
          <View style={styles.View_250_597}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0159bec-cfdf-4268-8a54-18e9544c91d4"
              }}
              style={styles.ImageBackground_250_600}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_180_581}>
        <View style={styles.View_I180_581_107_138} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd79e1b6-0bc3-4af7-af2e-ac7246e5d02e"
          }}
          style={styles.ImageBackground_I180_581_36_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/783ee32a-0e9a-4c55-8b3b-685fa2d77a03"
          }}
          style={styles.ImageBackground_I180_581_36_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d816cee5-ef0d-4926-8f7d-454cf774a803"
          }}
          style={styles.ImageBackground_I180_581_36_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4b5d43a-dac9-451f-a3da-a312763143c5"
          }}
          style={styles.ImageBackground_I180_581_36_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08a7b7e0-130e-43be-bcae-a956c4a2e372"
          }}
          style={styles.ImageBackground_I180_581_36_21}
        />
        <View style={styles.View_I180_581_1_752}>
          <Text style={styles.Text_I180_581_1_752}>19: 00</Text>
        </View>
      </View>
      <View style={styles.View_180_582}>
        <View style={styles.View_I180_582_99_335} />
        <View style={styles.View_I180_582_9_4285}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I180_582_9_4286}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_1024"))
            }
          >
            <View style={styles.View_I180_582_9_4287}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cf704ac-c09a-4979-a461-b1a87388d80c"
                }}
                style={styles.ImageBackground_I180_582_9_4288}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I180_582_9_4291}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_663"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I180_582_9_4297}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_0"))
            }
          >
            <View style={styles.View_I180_582_9_4298}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b849c98-ff17-44d1-8497-a905ba633d08"
                }}
                style={styles.ImageBackground_I180_582_9_4299}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I180_582_9_4302}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("57_168"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b79302b2-fbb1-4705-9048-678e6405971f"
              }}
              style={styles.ImageBackground_I180_582_57_1237}
            />
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b22557c-c24c-40cd-9369-fef10974ac98"
            }}
            style={styles.ImageBackground_I180_582_9_4304}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5711440-55a6-4cf7-b098-6aac1daf9417"
          }}
          style={styles.ImageBackground_I180_582_99_336}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("169%") },
  View_184_38: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_183_2: {
    width: wp("29%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_17: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_183_7: {
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_183_7: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_11: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_183_11: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_8: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_183_8: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_336_169: {
    width: wp("38%"),
    height: hp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_336_170: {
    width: wp("38%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 138, 126, 1)"
  },
  View_336_171: {
    width: wp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_336_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_336_179: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_183_47: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_183_43: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_44: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(241, 241, 241, 1)",
    borderWidth: 1
  },
  View_183_45: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_183_45: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_49: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  ImageBackground_183_48: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_183_46: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_183_46: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_184_5: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_184_6: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_184_39: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_184_29: {
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
  View_184_30: {
    width: wp("71%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_184_30: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_184_32: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_184_40: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_184_40: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_75: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_184_62: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%")
  },
  View_184_66: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_66: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_67: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_184_67: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_54: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%")
  },
  ImageBackground_184_59: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_184_57: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_57: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_58: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_184_58: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_53: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_184_50: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_184_48: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_48: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_49: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_184_49: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_184_77: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%")
  },
  ImageBackground_184_79: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("1%")
  },
  View_184_80: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_184_130: {
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
  View_184_131: {
    width: wp("71%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_184_131: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_184_137: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_184_208: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_184_83: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%")
  },
  View_184_84: {
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_84: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_85: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_85: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_92: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%")
  },
  View_184_93: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_93: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_94: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_94: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_39: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_101: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%")
  },
  View_184_102: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_102: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_103: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_103: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_38: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_110: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%")
  },
  View_184_111: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_111: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_112: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_112: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_37: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_119: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%")
  },
  View_184_120: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_120: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_121: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_121: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_36: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_163: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  View_184_209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_184_164: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_164: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_165: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_165: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_35: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_173: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  View_184_174: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_174: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_175: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_175: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_34: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_184_180: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_184_181: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_181: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_182: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_182: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_183: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_204_33: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_187: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_184_188: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_188: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_189: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_189: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_204_32: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_194: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  ImageBackground_204_31: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_199: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_199: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_200: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_200: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_184_201: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_204_30: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_184_213: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%")
  },
  View_184_214: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(241, 241, 241, 1)",
    borderWidth: 1
  },
  View_184_215: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_215: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_206: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_184_206: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_184_207: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_184_207: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_180_571: {
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
  View_184_25: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_184_35: {
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
  TouchableOpacity_180_572: {
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
  ImageBackground_180_573: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_184_11: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_184_12: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  TouchableOpacity_183_3: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_183_4: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_250_597: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_250_600: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_180_581: {
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
  View_I180_581_107_138: {
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
  ImageBackground_I180_581_36_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I180_581_36_18: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  ImageBackground_I180_581_36_19: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%")
  },
  ImageBackground_I180_581_36_20: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I180_581_36_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  View_I180_581_1_752: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I180_581_1_752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_180_582: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("162%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I180_582_99_335: {
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
  View_I180_582_9_4285: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  TouchableOpacity_I180_582_9_4286: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I180_582_9_4287: {
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
  ImageBackground_I180_582_9_4288: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_I180_582_9_4291: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I180_582_9_4297: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I180_582_9_4298: {
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
  ImageBackground_I180_582_9_4299: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_I180_582_9_4302: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I180_582_57_1237: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I180_582_9_4304: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_I180_582_99_336: {
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
