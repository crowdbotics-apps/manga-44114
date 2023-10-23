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
      <View style={styles.View_122_231}>
        <View style={styles.View_122_232}>
          <View style={styles.View_I122_232_96_57}>
            <Text style={styles.Text_I122_232_96_57}>Miễn phí</Text>
          </View>
          <View style={styles.View_I122_232_105_39}>
            <Text style={styles.Text_I122_232_105_39}>Tất cả</Text>
          </View>
        </View>
        <View style={styles.View_122_233}>
          <View style={styles.View_122_234}>
            <View style={styles.View_122_235}>
              <Text style={styles.Text_122_235}>Dr.Stone 3</Text>
            </View>
            <View style={styles.View_122_236}>
              <Text style={styles.Text_122_236}>HuyDnag</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ce9d5fe-a0e5-4704-ba9c-1e245e67a20d"
              }}
              style={styles.ImageBackground_122_237}
            />
          </View>
          <View style={styles.View_122_238}>
            <View style={styles.View_122_239}>
              <Text style={styles.Text_122_239}>Dr.Stone 2</Text>
            </View>
            <View style={styles.View_122_240}>
              <Text style={styles.Text_122_240}> HuyDnag</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bf048bc-00b8-45e3-8c49-127ab1b925d5"
              }}
              style={styles.ImageBackground_122_241}
            />
          </View>
          <View style={styles.View_122_242}>
            <View style={styles.View_122_243}>
              <Text style={styles.Text_122_243}>Dr.Stone</Text>
            </View>
            <View style={styles.View_122_244}>
              <Text style={styles.Text_122_244}>HuyDnag</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d921844-3793-4303-8708-cbf135bd8000"
              }}
              style={styles.ImageBackground_122_245}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_122_180}>
        <View style={styles.View_122_181}>
          <View style={styles.View_I122_181_96_57}>
            <Text style={styles.Text_I122_181_96_57}>Dành cho bạn</Text>
          </View>
          <View style={styles.View_I122_181_105_39}>
            <Text style={styles.Text_I122_181_105_39}>Tất cả</Text>
          </View>
        </View>
        <View style={styles.View_122_182}>
          <View style={styles.View_122_183}>
            <View style={styles.View_122_184}>
              <Text style={styles.Text_122_184}>Truyền nhân Cửu Vỹ Hồ</Text>
            </View>
            <View style={styles.View_122_185}>
              <Text style={styles.Text_122_185}>Kishimoto</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/862c7279-d078-4373-bee7-d3cb8e223a81"
              }}
              style={styles.ImageBackground_122_186}
            />
          </View>
          <View style={styles.View_122_187}>
            <View style={styles.View_122_188}>
              <Text style={styles.Text_122_188}>Đấm Phát Chết Luôn</Text>
            </View>
            <View style={styles.View_122_189}>
              <Text style={styles.Text_122_189}>Sakamoto</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/404dc726-9d7e-4f04-87cf-7d0f1d8b2431"
              }}
              style={styles.ImageBackground_122_190}
            />
          </View>
          <View style={styles.View_122_191}>
            <View style={styles.View_122_192}>
              <Text style={styles.Text_122_192}>Đảo Hải Tặc</Text>
            </View>
            <View style={styles.View_122_193}>
              <Text style={styles.Text_122_193}>Oda</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7402b1d-dcb5-4a7c-a176-e8271a799b35"
              }}
              style={styles.ImageBackground_122_194}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_122_214}>
        <View style={styles.View_122_215}>
          <View style={styles.View_I122_215_96_57}>
            <Text style={styles.Text_I122_215_96_57}>Top Trending</Text>
          </View>
          <View style={styles.View_I122_215_105_39}>
            <Text style={styles.Text_I122_215_105_39}>Tất cả</Text>
          </View>
        </View>
        <View style={styles.View_122_216}>
          <View style={styles.View_122_217}>
            <View style={styles.View_122_218}>
              <Text style={styles.Text_122_218}>Apple</Text>
            </View>
            <View style={styles.View_122_219}>
              <Text style={styles.Text_122_219}>Samsung</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c9d58dc-a6d6-4119-aece-b7b694359a38"
              }}
              style={styles.ImageBackground_122_220}
            />
          </View>
          <View style={styles.View_122_221}>
            <View style={styles.View_122_222}>
              <Text style={styles.Text_122_222}>Suzuki</Text>
            </View>
            <View style={styles.View_122_223}>
              <Text style={styles.Text_122_223}>Yamaha</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8d8fea5-4a19-4214-bba1-87d7b53e86c7"
              }}
              style={styles.ImageBackground_122_224}
            />
          </View>
          <View style={styles.View_122_225}>
            <View style={styles.View_122_226}>
              <Text style={styles.Text_122_226}>FOGGY FOOT</Text>
            </View>
            <View style={styles.View_122_227}>
              <Text style={styles.Text_122_227}>Sayya yuki</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b40b2744-e3c8-4a3b-a4dc-b7c5c25b060d"
              }}
              style={styles.ImageBackground_122_228}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_122_197}>
        <View style={styles.View_122_198}>
          <View style={styles.View_I122_198_96_57}>
            <Text style={styles.Text_I122_198_96_57}>Vừa ra mắt</Text>
          </View>
          <View style={styles.View_I122_198_105_39}>
            <Text style={styles.Text_I122_198_105_39}>Tất cả</Text>
          </View>
        </View>
        <View style={styles.View_122_199}>
          <View style={styles.View_122_200}>
            <View style={styles.View_122_201}>
              <Text style={styles.Text_122_201}>Thất Nghiệp Chuyển Sinh</Text>
            </View>
            <View style={styles.View_122_202}>
              <Text style={styles.Text_122_202}>Sheila On 7</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddfdf4cd-fc1f-417a-910f-1b0100e1b396"
              }}
              style={styles.ImageBackground_122_203}
            />
          </View>
          <View style={styles.View_122_204}>
            <View style={styles.View_122_205}>
              <Text style={styles.Text_122_205}>Sứ Giá Thần Chết</Text>
            </View>
            <View style={styles.View_122_206}>
              <Text style={styles.Text_122_206}>Yuji</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe4d0dc7-a6bd-453b-9fd8-10b9f9bc48fe"
              }}
              style={styles.ImageBackground_122_207}
            />
          </View>
          <View style={styles.View_122_208}>
            <View style={styles.View_122_209}>
              <Text style={styles.Text_122_209}>One Punch Man</Text>
            </View>
            <View style={styles.View_122_210}>
              <Text style={styles.Text_122_210}>ONE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccdd28db-f8d8-4a0d-9edf-2c445df22aa7"
              }}
              style={styles.ImageBackground_122_211}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_118_48}>
        <View style={styles.View_118_49}>
          <View style={styles.View_118_50}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef59c863-08bb-4ca2-8285-06bf9052033f"
              }}
              style={styles.ImageBackground_118_51}
            />
            <View style={styles.View_118_52}>
              <View style={styles.View_118_53} />
            </View>
            <View style={styles.View_118_56}>
              <Text style={styles.Text_118_56}>10 Tác giả tốt nhất</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64f89062-5620-4daa-a7b2-d73bedc4458d"
              }}
              style={styles.ImageBackground_84_584}
            />
          </View>
          <View style={styles.View_118_57}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72dd7b6c-e889-417c-ba23-5361a2d34193"
              }}
              style={styles.ImageBackground_118_58}
            />
            <View style={styles.View_118_59}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef90af13-ff97-4c38-8b40-3a99abc580a6"
                }}
                style={styles.ImageBackground_118_60}
              />
            </View>
            <View style={styles.View_118_63}>
              <Text style={styles.Text_118_63}>
                20 Truyện miễn phí tốt nhất
              </Text>
            </View>
          </View>
          <View style={styles.View_118_64}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9149c3ce-d138-42f8-8c32-9b158aa0ba23"
              }}
              style={styles.ImageBackground_118_65}
            />
            <View style={styles.View_118_66}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b576800f-3dbc-46d9-abc0-a8b705f8b0cf"
                }}
                style={styles.ImageBackground_118_69}
              />
            </View>
            <View style={styles.View_118_70}>
              <Text style={styles.Text_118_70}>20 Truyện mới phát hành </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_118_71}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("159_622"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44f15d80-ff3a-4935-9ca1-a048c2247538"
              }}
              style={styles.ImageBackground_118_72}
            />
            <View style={styles.View_118_77}>
              <Text style={styles.Text_118_77}>10 Truyện xu hướng</Text>
            </View>
            <View style={styles.View_81_583}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9ded668-2c83-473e-ad4e-aa849a7ec1d3"
                }}
                style={styles.ImageBackground_81_586}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_118_78}>
          <Text style={styles.Text_118_78}>Thống kê</Text>
        </View>
      </View>
      <View style={styles.View_113_197}>
        <View style={styles.View_113_224}>
          <View style={styles.View_113_216}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0603a12a-b7bf-4203-899a-f0887b132088"
              }}
              style={styles.ImageBackground_113_217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8713d07-d59b-4a4c-96b4-66c37d55f09b"
              }}
              style={styles.ImageBackground_113_218}
            />
            <View style={styles.View_113_221}>
              <Text style={styles.Text_113_221}>Novel</Text>
            </View>
          </View>
          <View style={styles.View_57_1056}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdf17c9a-30a9-4a28-8124-9e4c15aa2dac"
              }}
              style={styles.ImageBackground_57_1057}
            />
            <View style={styles.View_57_1058}>
              <Text style={styles.Text_57_1058}>Dị Giới</Text>
            </View>
          </View>
          <View style={styles.View_57_1059}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6853432-649f-4c73-a83e-f45aeb362398"
              }}
              style={styles.ImageBackground_57_1060}
            />
            <View style={styles.View_57_1061}>
              <Text style={styles.Text_57_1061}>Huyền huyễn</Text>
            </View>
          </View>
          <View style={styles.View_57_1066}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a93874a7-6bf5-420a-87e3-1ec76d43e6bd"
              }}
              style={styles.ImageBackground_57_1067}
            />
            <View style={styles.View_57_1068}>
              <Text style={styles.Text_57_1068}>Tiên hiệp</Text>
            </View>
          </View>
          <View style={styles.View_57_1038}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc738d2a-80b2-44b8-b503-a033fcb6fb3d"
              }}
              style={styles.ImageBackground_57_1039}
            />
            <View style={styles.View_57_1040}>
              <Text style={styles.Text_57_1040}>Hệ thống</Text>
            </View>
          </View>
          <View style={styles.View_57_1041}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b26b7313-fe4f-492e-a1ba-748e40287b60"
              }}
              style={styles.ImageBackground_57_1042}
            />
            <View style={styles.View_57_1043}>
              <Text style={styles.Text_57_1043}>Sắc hiệp</Text>
            </View>
          </View>
          <View style={styles.View_57_1044}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28ad7964-989d-457d-ba83-7d3662181d18"
              }}
              style={styles.ImageBackground_57_1045}
            />
            <View style={styles.View_57_1046}>
              <Text style={styles.Text_57_1046}>Khoa huyễn</Text>
            </View>
          </View>
          <View style={styles.View_57_1047}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6189f67d-eebc-4801-973e-a70c5e897806"
              }}
              style={styles.ImageBackground_57_1048}
            />
            <View style={styles.View_57_1049}>
              <Text style={styles.Text_57_1049}>Dị năng</Text>
            </View>
          </View>
          <View style={styles.View_57_1050}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bb72320-ea23-42ab-9ddd-26065cd78b5d"
              }}
              style={styles.ImageBackground_57_1051}
            />
            <View style={styles.View_57_1052}>
              <Text style={styles.Text_57_1052}>Đô thị</Text>
            </View>
          </View>
          <View style={styles.View_57_1053}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeed3ef4-ffd3-44dd-b8ff-7f5352e06cb4"
              }}
              style={styles.ImageBackground_57_1054}
            />
            <View style={styles.View_57_1055}>
              <Text style={styles.Text_57_1055}>Kiếm hiệp</Text>
            </View>
          </View>
          <View style={styles.View_57_1019}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40b28435-e787-4fbf-a6b4-0832c37aa8d9"
              }}
              style={styles.ImageBackground_57_1020}
            />
            <View style={styles.View_57_1021}>
              <Text style={styles.Text_57_1021}>Ngôn tình</Text>
            </View>
          </View>
          <View style={styles.View_57_1022}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08391bcd-4c73-4aea-8e47-f31cb1f2cb58"
              }}
              style={styles.ImageBackground_57_1023}
            />
            <View style={styles.View_57_1024}>
              <Text style={styles.Text_57_1024}>Trọng sinh</Text>
            </View>
          </View>
          <View style={styles.View_57_1025}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bbe2ee1-26e3-4400-8edb-2df2045b878b"
              }}
              style={styles.ImageBackground_57_1026}
            />
            <View style={styles.View_57_1027}>
              <Text style={styles.Text_57_1027}>Lịch sử</Text>
            </View>
          </View>
          <View style={styles.View_57_1031}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f428310b-0f99-4e4e-a73a-79217ecfad01"
              }}
              style={styles.ImageBackground_57_1032}
            />
            <View style={styles.View_57_1033}>
              <Text style={styles.Text_57_1033}>Hài hước</Text>
            </View>
          </View>
          <View style={styles.View_57_1010}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f74d23e-e560-4f45-a7c1-c3a2ffebe561"
              }}
              style={styles.ImageBackground_57_1011}
            />
            <View style={styles.View_57_1012}>
              <Text style={styles.Text_57_1012}>Nữ cường</Text>
            </View>
          </View>
          <View style={styles.View_57_1013}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62378779-7a33-43b4-987f-26306d2f61f9"
              }}
              style={styles.ImageBackground_57_1014}
            />
            <View style={styles.View_57_1015}>
              <Text style={styles.Text_57_1015}>Mạt thế</Text>
            </View>
          </View>
          <View style={styles.View_57_1028}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15e33bff-41ca-4115-9c83-6a6ed89e1730"
              }}
              style={styles.ImageBackground_57_1029}
            />
            <View style={styles.View_57_1030}>
              <Text style={styles.Text_57_1030}>Xuyên không</Text>
            </View>
          </View>
          <View style={styles.View_57_1016}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/163452a5-0042-47bc-baa7-9f094b7fd019"
              }}
              style={styles.ImageBackground_57_1017}
            />
            <View style={styles.View_57_1018}>
              <Text style={styles.Text_57_1018}>Đồng nhân</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_9_4791}>
        <View style={styles.View_I9_4791_99_335} />
        <View style={styles.View_I9_4791_9_4285}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I9_4791_9_4286}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_1024"))
            }
          >
            <View style={styles.View_I9_4791_9_4287}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d71f1fd9-0ec6-4990-bc78-54ea43b4959b"
                }}
                style={styles.ImageBackground_I9_4791_9_4288}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I9_4791_9_4291}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("266_663"))
            }
          />
          <View style={styles.View_I9_4791_9_4297}>
            <View style={styles.View_I9_4791_9_4298}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/739be484-773d-4d15-b886-bc6763b7ab97"
                }}
                style={styles.ImageBackground_I9_4791_9_4299}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I9_4791_9_4302}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("57_168"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f5a6f2f-260b-4cc4-97df-d002e60ed0f7"
              }}
              style={styles.ImageBackground_I9_4791_57_1237}
            />
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/926e9905-52c0-41dd-8ad3-97fddd397335"
            }}
            style={styles.ImageBackground_I9_4791_9_4304}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cca0aeb-db83-445d-88e7-016f8e321c7a"
          }}
          style={styles.ImageBackground_I9_4791_99_336}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_113_99}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("126_203"))
        }
      >
        <View style={styles.View_122_272} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97d4aa8f-f456-4f08-96f1-446c17e7a704"
          }}
          style={styles.ImageBackground_113_100}
        />
        <View style={styles.View_113_101}>
          <Text style={styles.Text_113_101}>Tìm kiếm tiêu đề,tác giả,sách</Text>
        </View>
        <View style={styles.View_113_94}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/498950d7-9a55-47f5-8742-fbdf054dcb81"
            }}
            style={styles.ImageBackground_113_95}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_113_52}>
        <View style={styles.View_I113_52_107_138} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f5c1324-6009-4d39-b824-31b0f3691edc"
          }}
          style={styles.ImageBackground_I113_52_36_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6acfe46-0a20-4fa4-91b1-b6696f38c373"
          }}
          style={styles.ImageBackground_I113_52_36_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d8ca6cb-a539-4914-a474-2c72f703bb04"
          }}
          style={styles.ImageBackground_I113_52_36_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb07aac6-37b0-4095-a172-8b3b79687120"
          }}
          style={styles.ImageBackground_I113_52_36_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/842b76a1-3e46-4242-b80f-94569120094b"
          }}
          style={styles.ImageBackground_I113_52_36_21}
        />
        <View style={styles.View_I113_52_1_752}>
          <Text style={styles.Text_I113_52_1_752}>19: 00</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("239%") },
  View_122_231: {
    width: wp("115%"),
    minWidth: wp("115%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("190%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_122_232: {
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
  View_I122_232_96_57: {
    flexGrow: 1,
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I122_232_96_57: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I122_232_105_39: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I122_232_105_39: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_233: {
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
  View_122_234: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  View_122_235: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_235: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_236: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_122_236: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_237: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_238: {
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
  View_122_239: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_239: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_240: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_122_240: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_241: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_242: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_243: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_243: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_244: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_122_244: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_245: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_180: {
    width: wp("115%"),
    minWidth: wp("115%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("147%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_122_181: {
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
  View_I122_181_96_57: {
    flexGrow: 1,
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I122_181_96_57: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I122_181_105_39: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I122_181_105_39: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_182: {
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
  View_122_183: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  View_122_184: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_184: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_185: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_122_185: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_186: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_187: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_122_188: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_188: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_189: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    justifyContent: "center"
  },
  Text_122_189: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_190: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_191: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_192: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_122_192: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_193: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_122_193: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_194: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_214: {
    width: wp("115%"),
    minWidth: wp("115%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_122_215: {
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
  View_I122_215_96_57: {
    flexGrow: 1,
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I122_215_96_57: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I122_215_105_39: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I122_215_105_39: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_216: {
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
  View_122_217: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  View_122_218: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_218: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_219: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_122_219: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_220: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_221: {
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
  View_122_222: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_222: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_223: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_122_223: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_224: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_225: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_226: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_226: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_227: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_122_227: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_228: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_197: {
    width: wp("115%"),
    minWidth: wp("115%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_122_198: {
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
  View_I122_198_96_57: {
    flexGrow: 1,
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I122_198_96_57: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I122_198_105_39: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I122_198_105_39: {
    color: "rgba(17, 138, 126, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_199: {
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
  View_122_200: {
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
  View_122_201: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_122_201: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_202: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    justifyContent: "center"
  },
  Text_122_202: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_203: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_204: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_122_205: {
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_122_205: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_206: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_122_206: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_207: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_208: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_122_209: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_122_209: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_210: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_122_210: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_211: {
    width: wp("35%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_48: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_118_49: {
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
  View_118_50: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("132%"),
    top: hp("-2%")
  },
  ImageBackground_118_51: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_118_52: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_118_53: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_118_56: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_118_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_84_584: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0
  },
  View_118_57: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%")
  },
  ImageBackground_118_58: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_59: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_118_60: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_118_63: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_118_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_118_64: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%")
  },
  ImageBackground_118_65: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_66: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("8%")
  },
  ImageBackground_118_69: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0
  },
  View_118_70: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_118_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_118_71: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_118_72: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_118_77: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_118_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_583: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("8%")
  },
  ImageBackground_81_586: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0
  },
  View_118_78: {
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
  Text_118_78: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_197: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_224: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_216: {
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
  ImageBackground_113_217: {
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
  ImageBackground_113_218: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%")
  },
  View_113_221: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_113_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1056: {
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
  ImageBackground_57_1057: {
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
  View_57_1058: {
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
  Text_57_1058: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1059: {
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
  ImageBackground_57_1060: {
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
  View_57_1061: {
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
  Text_57_1061: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1066: {
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
  ImageBackground_57_1067: {
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
  View_57_1068: {
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
  Text_57_1068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1038: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("235%"),
    top: hp("0%")
  },
  ImageBackground_57_1039: {
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
  View_57_1040: {
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
  Text_57_1040: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1041: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("205%"),
    top: hp("0%")
  },
  ImageBackground_57_1042: {
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
  View_57_1043: {
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
  Text_57_1043: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1044: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("176%"),
    top: hp("0%")
  },
  ImageBackground_57_1045: {
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
  View_57_1046: {
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
  Text_57_1046: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1047: {
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
  ImageBackground_57_1048: {
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
  View_57_1049: {
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
  Text_57_1049: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1050: {
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
  ImageBackground_57_1051: {
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
  View_57_1052: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1052: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1053: {
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
  ImageBackground_57_1054: {
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
  View_57_1055: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1055: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1019: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("381%"),
    top: hp("0%")
  },
  ImageBackground_57_1020: {
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
  View_57_1021: {
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
  Text_57_1021: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1022: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("352%"),
    top: hp("0%")
  },
  ImageBackground_57_1023: {
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
  View_57_1024: {
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
  Text_57_1024: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1025: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("323%"),
    top: hp("0%")
  },
  ImageBackground_57_1026: {
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
  View_57_1027: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1027: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1031: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("264%"),
    top: hp("0%")
  },
  ImageBackground_57_1032: {
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
  View_57_1033: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1033: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1010: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("467%"),
    top: hp("0%")
  },
  ImageBackground_57_1011: {
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
  View_57_1012: {
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
  Text_57_1012: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1013: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("437%"),
    top: hp("0%")
  },
  ImageBackground_57_1014: {
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
  View_57_1015: {
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
  Text_57_1015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1028: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("293%"),
    top: hp("0%")
  },
  ImageBackground_57_1029: {
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
  View_57_1030: {
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
  Text_57_1030: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_1016: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("408%"),
    top: hp("0%")
  },
  ImageBackground_57_1017: {
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
  View_57_1018: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_1018: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_4791: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("232%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_4791_99_335: {
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
  View_I9_4791_9_4285: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  TouchableOpacity_I9_4791_9_4286: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_4791_9_4287: {
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
  ImageBackground_I9_4791_9_4288: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_I9_4791_9_4291: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_4791_9_4297: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_4791_9_4298: {
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
  ImageBackground_I9_4791_9_4299: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_I9_4791_9_4302: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_4791_57_1237: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I9_4791_9_4304: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_I9_4791_99_336: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_113_99: {
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
  View_122_272: {
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
  ImageBackground_113_100: {
    width: wp("87%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_113_101: {
    width: wp("80%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_113_101: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_94: {
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
  ImageBackground_113_95: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_113_52: {
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
  View_I113_52_107_138: {
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
  ImageBackground_I113_52_36_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I113_52_36_18: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  ImageBackground_I113_52_36_19: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%")
  },
  ImageBackground_I113_52_36_20: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I113_52_36_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  View_I113_52_1_752: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I113_52_1_752: {
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
