import React from "react";
import { ScrollView, Text, View } from "react-native";
import { HtmlCssJs } from "../components/HtmlCssJs";

export function AboutJs() {
  return (
    <ScrollView
      style={{ backgroundColor: "#f2f2f2", paddingTop: 40, padding: 8 }}
    >
      <View>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 4 }}>
          O que é o Java Script?
        </Text>
        <Text style={{ textAlign: "justify" }}>
          JavaScript (JS) é uma linguagem de programação que permite a você
          implementar itens complexos em páginas web — toda vez que uma página
          da web faz mais do que simplesmente mostrar a você informação estática
          — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas
          interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o
          JavaScript provavelmente está envolvido. É a terceira camada do bolo
          das tecnologias padrões da web, fazendo trio com CSS e HTML
          (facilmente pode ser encontrado na internet conteúdos sobre essas
          tecnologias).
        </Text>
        <HtmlCssJs />
      </View>
    </ScrollView>
  );
}
