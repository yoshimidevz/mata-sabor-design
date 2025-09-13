import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        {/* Page Header */}
        <section className="py-16 px-4 bg-gradient-forest">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
              Tem dúvidas sobre nossos produtos? Quer conhecer mais sobre nossa história? 
              Estamos aqui para conversar!
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário de Contato */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  Mande sua Mensagem
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium font-sans text-foreground mb-2">
                        Nome *
                      </label>
                      <Input 
                        type="text" 
                        required 
                        className="font-sans"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-sans text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input 
                        type="email" 
                        required 
                        className="font-sans"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium font-sans text-foreground mb-2">
                      Telefone
                    </label>
                    <Input 
                      type="tel" 
                      className="font-sans"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium font-sans text-foreground mb-2">
                      Assunto *
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="font-sans"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium font-sans text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      required 
                      rows={5}
                      className="font-sans resize-none"
                      placeholder="Conte-nos mais sobre sua dúvida ou sugestão..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Informações de Contato */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                    Outras Formas de Contato
                  </h2>
                </div>

                <div className="grid gap-6">
                  <Card className="p-6 border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-lg mb-1">E-mail</h3>
                        <p className="text-muted-foreground font-sans">contato@sabordamata.com.br</p>
                        <p className="text-sm text-muted-foreground font-sans mt-1">
                          Respondemos em até 24 horas
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-lg mb-1">Telefone</h3>
                        <p className="text-muted-foreground font-sans">(11) 9999-9999</p>
                        <p className="text-sm text-muted-foreground font-sans mt-1">
                          WhatsApp disponível
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-lg mb-1">Localização</h3>
                        <p className="text-muted-foreground font-sans">São Paulo, SP</p>
                        <p className="text-sm text-muted-foreground font-sans mt-1">
                          Entregas para todo o Brasil
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-lg mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground font-sans">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-muted-foreground font-sans">Sábado: 8h às 14h</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;