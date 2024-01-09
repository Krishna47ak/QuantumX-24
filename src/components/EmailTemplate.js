import { Button, Container, Html, Section, Text } from "@react-email/components";
import * as React from "react";
import { eventWhatsapp } from '@/utils/event-whatsapp';

export default function EmailTemplate({ name, eventName }) {

    const event = eventWhatsapp?.find((reg) => reg?.name === eventName)

    return (
        <Html>
            <Section>
                <Container style={{ textAlign: "center", backgroundColor: "#831c84", color: "#fff", padding: "25px", borderRadius: "5px" }} >
                    <Text style={{ fontSize: "20px" }} >Hello, <strong style={{ color: "#c3b5fd" }} >{name}</strong></Text>
                    <Text style={{ fontSize: "15px" }} >You have successfully registered for &quot;<i><strong>{eventName}</strong></i>&quot;</Text>
                    <Button
                        href={event?.whatsAppLink}
                        style={{ background: "#25D366", color: "#fff", padding: "12px 20px", marginTop: "10px", borderRadius: "10px" }}
                    >
                        Join whatsapp group
                    </Button>
                </Container>
            </Section>
        </Html>
    );
}
