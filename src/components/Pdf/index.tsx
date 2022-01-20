/* eslint-disable */
import { Document, Font, Page, Text, Image, View } from '@react-pdf/renderer';

//TODO - Add styles
Font.register({ family: 'Motiva Sans Bold', src: '/fonts/Motiva-Sans-Bold.ttf' });
const CertPDF = (props: any) => {
  return (
    <Document>
      <Page style={{ display: 'flex', flexDirection: 'column'}} size="A4" orientation="landscape" >
        <View>
          <Image src="/img/header.png" />
        </View>
        <View >
          <Text style={{ alignItems: 'center', fontSize: '48px', fontFamily: 'Motiva Sans Bold', textAlign: 'center', margin: '50rem 50rem' }}>Certificado</Text>

          <View >
            <Text style={{ textAlign: 'center', margin: '30rem 100rem', fontSize: '16px' }}>
              Certificamos que {props.user} participou da 2º Edição do EPICE,
              Encontro Picuiense de Computação e Eletrônica, durante os dias
              30 de novembro, 01 e 02 de dezembro de 2021. Totalizando carga horária de 12 horas.
            </Text>
          </View>
        </View>
        <View style={{ textAlign: 'center', margin: '10rem auto', fontSize: '16px' }}>
          <div style={{ margin: 'auto' }}>
            <Image src="/img/assinatura.png" style={{ width: '200px' }}  />
          </div>
          <Text>Rômulo Costa de Menezes Júnior</Text>
          <Text>Coordenador do EPICE</Text>
        </View>
      </Page>
    </Document>
  )
};
export default CertPDF;