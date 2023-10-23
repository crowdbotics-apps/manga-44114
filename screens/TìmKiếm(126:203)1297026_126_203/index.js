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
      <View style={styles.View_126_411}>
        <View style={styles.View_126_422}>
          <Text style={styles.Text_126_422}>Tìm kiếm gần đây</Text>
        </View>
        <View style={styles.View_126_423}>
          <View style={styles.View_126_424}>
            <View style={styles.View_126_425}>
              <Text style={styles.Text_126_425}>Haikyuu!!</Text>
            </View>
            <View style={styles.View_126_426}>
              <Text style={styles.Text_126_426}>Buku</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbc70a00-eb55-4684-8c22-4fd98cb141ea"
              }}
              style={styles.ImageBackground_126_428}
            />
            <View style={styles.View_126_465}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbef9b4d-b13d-460c-9f5d-dc16d5f9f1f2"
                }}
                style={styles.ImageBackground_126_466}
              />
            </View>
          </View>
          <View style={styles.View_126_429}>
            <View style={styles.View_126_430}>
              <Text style={styles.Text_126_430}>Slam Dunk!</Text>
            </View>
            <View style={styles.View_126_431}>
              <Text style={styles.Text_126_431}>Penulis</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d902a224-5eb6-4e56-b13f-eaeacd4f99b8"
              }}
              style={styles.ImageBackground_126_433}
            />
            <View style={styles.View_126_461}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf7cb3d1-d3ff-4e90-a507-f92fe6409f4e"
                }}
                style={styles.ImageBackground_126_462}
              />
            </View>
          </View>
          <View style={styles.View_126_434}>
            <View style={styles.View_126_435}>
              <Text style={styles.Text_126_435}>My Hero Academia</Text>
            </View>
            <View style={styles.View_126_436}>
              <Text style={styles.Text_126_436}>Narator</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/035629bd-e34e-4f6c-800e-6a7e837f9aea"
              }}
              style={styles.ImageBackground_126_438}
            />
            <View style={styles.View_126_457}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/645baa63-e1ee-485a-91d4-90188f7d1196"
                }}
                style={styles.ImageBackground_126_458}
              />
            </View>
          </View>
          <View style={styles.View_126_439}>
            <View style={styles.View_126_440}>
              <Text style={styles.Text_126_440}>Dr.Stone</Text>
            </View>
            <View style={styles.View_126_441}>
              <Text style={styles.Text_126_441}>Buku</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bda7b0a-6386-4f71-908c-4e826923a408"
              }}
              style={styles.ImageBackground_126_443}
            />
            <View style={styles.View_126_453}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af0a1a9b-75bc-4192-b94f-bc971853f85f"
                }}
                style={styles.ImageBackground_126_454}
              />
            </View>
          </View>
          <View style={styles.View_126_444}>
            <View style={styles.View_126_445}>
              <Text style={styles.Text_126_445}>Jujutsu Kaisen</Text>
            </View>
            <View style={styles.View_126_446}>
              <Text style={styles.Text_126_446}>Gege Akutami</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bb42979-2e16-4fcd-b2d4-78546959388d"
              }}
              style={styles.ImageBackground_126_448}
            />
            <View style={styles.View_126_449}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/383ed305-d12b-406a-96a9-fba6ee73cb10"
                }}
                style={styles.ImageBackground_126_450}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_266_883}>
          <Text style={styles.Text_266_883}>Xóa các tìm kiếm gần đây</Text>
        </View>
      </View>
      <View style={styles.View_126_407}>
        <View style={styles.View_126_398}>
          <View style={styles.View_126_402}>
            <View style={styles.View_126_403} />
            <View style={styles.View_126_404}>
              <Text style={styles.Text_126_404}>Buku</Text>
            </View>
          </View>
          <View style={styles.View_126_399}>
            <View style={styles.View_126_400} />
            <View style={styles.View_126_401}>
              <Text style={styles.Text_126_401}>Dr. Stone</Text>
            </View>
          </View>
          <View style={styles.View_55_679}>
            <View style={styles.View_55_680} />
            <View style={styles.View_55_681}>
              <Text style={styles.Text_55_681}>Gege Akutami</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_126_406}>
          <Text style={styles.Text_126_406}>Tìm kiếm phổ biến</Text>
        </View>
      </View>
      <View style={styles.View_208_544}>
        <View style={styles.View_208_545} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbb3f1b9-8c6f-46b3-b850-75bbe4d14319"
          }}
          style={styles.ImageBackground_208_546}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_130_947}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("126_474"))
          }
        >
          <Text style={styles.Text_130_947}>Tìm kiếm tiêu đề,tác giả,sách</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_208_548}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("126_474"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b786f607-f766-4ae1-aed6-c48231a378d5"
            }}
            style={styles.ImageBackground_208_549}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_208_552}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("113_0"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8adb25bf-d1aa-4e62-bddb-b076edfdea68"
            }}
            style={styles.ImageBackground_208_553}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_126_353}>
        <View style={styles.View_I126_353_107_138} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a53b0f0-8984-42e9-8855-422054644b8f"
          }}
          style={styles.ImageBackground_I126_353_36_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e42b67e9-6e13-489a-8136-4d656c2712d6"
          }}
          style={styles.ImageBackground_I126_353_36_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e134fa0-9304-465c-89cb-d46a4b1ffd08"
          }}
          style={styles.ImageBackground_I126_353_36_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/440bfa62-f30c-4b22-b5c1-dae7cf8c882f"
          }}
          style={styles.ImageBackground_I126_353_36_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeedde53-811f-44b1-becf-46fa6cf3ce91"
          }}
          style={styles.ImageBackground_I126_353_36_21}
        />
        <View style={styles.View_I126_353_1_752}>
          <Text style={styles.Text_I126_353_1_752}>19: 00</Text>
        </View>
      </View>
      <View style={styles.View_126_354}>
        <View style={styles.View_I126_354_99_335} />
        <View style={styles.View_I126_354_9_4285}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I126_354_9_4286}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_1024"))
            }
          >
            <View style={styles.View_I126_354_9_4287}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7b131a2-3aac-41a3-a664-66b06190c9d0"
                }}
                style={styles.ImageBackground_I126_354_9_4288}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I126_354_9_4291}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_663"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I126_354_9_4297}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_0"))
            }
          >
            <View style={styles.View_I126_354_9_4298}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccd40d64-4ff3-4d77-919a-521d3132cfb6"
                }}
                style={styles.ImageBackground_I126_354_9_4299}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I126_354_9_4302}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("57_168"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75122dc7-7098-4568-86ed-30339c2d999b"
              }}
              style={styles.ImageBackground_I126_354_57_1237}
            />
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47edba28-e1a9-4ba6-a356-8065fdb8d7b6"
            }}
            style={styles.ImageBackground_I126_354_9_4304}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cab6822-0fb5-4d9b-a0e7-210cf66cccd7"
          }}
          style={styles.ImageBackground_I126_354_99_336}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_126_411: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_422: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_422: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_423: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_126_424: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  View_126_425: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_126_425: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_426: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_126_426: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_126_428: {
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_465: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_126_466: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_126_429: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_126_430: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_126_430: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_431: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_126_431: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_126_433: {
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_461: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_126_462: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_126_434: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_126_435: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_126_435: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_436: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_126_436: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_126_438: {
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_457: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_126_458: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_126_439: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_126_440: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_126_440: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_441: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_126_441: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_126_443: {
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_453: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_126_454: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_126_444: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_445: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_126_445: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_446: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_126_446: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_126_448: {
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_449: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_126_450: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_266_883: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_266_883: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_407: {
    width: wp("146%"),
    minWidth: wp("146%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_398: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_402: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%")
  },
  View_126_403: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(207, 207, 207, 1)",
    borderWidth: 1
  },
  View_126_404: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_404: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_399: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_400: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(207, 207, 207, 1)",
    borderWidth: 1
  },
  View_126_401: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_401: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_679: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("0%")
  },
  View_55_680: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(207, 207, 207, 1)",
    borderWidth: 1
  },
  View_55_681: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_681: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_406: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_406: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_208_544: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_208_545: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_208_546: {
    width: wp("87%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  TouchableOpacity_130_947: {
    width: wp("70%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "center"
  },
  Text_130_947: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_208_548: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_208_549: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_208_552: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_208_553: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_126_353: {
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
  View_I126_353_107_138: {
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
  ImageBackground_I126_353_36_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I126_353_36_18: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  ImageBackground_I126_353_36_19: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%")
  },
  ImageBackground_I126_353_36_20: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I126_353_36_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  View_I126_353_1_752: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I126_353_1_752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_354: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_354_99_335: {
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
  View_I126_354_9_4285: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  TouchableOpacity_I126_354_9_4286: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_354_9_4287: {
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
  ImageBackground_I126_354_9_4288: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_I126_354_9_4291: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I126_354_9_4297: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_354_9_4298: {
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
  ImageBackground_I126_354_9_4299: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_I126_354_9_4302: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I126_354_57_1237: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I126_354_9_4304: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_I126_354_99_336: {
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
