<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiEntityTest extends TestCase
{
    use WithFaker;

    private $token;
    private $client;

    public function setUp() 
    {
        parent::setup();

        $this->client = new \GuzzleHttp\Client();

        $response = $this->client->request('POST', env('APP_URL') . '/api/auth/login', [
            'form_params' => [
                'email'     => env('EMAIL_TEST'),
                'password'  => env('PASS_TEST')
            ]
        ]);
        $content        = $response->getBody()->getContents();
        $jsonObject     = json_decode($content);
        $this->token    = $jsonObject->result->token;

    }

    /** @test */
    public function getEntitiesList()
    {
        $response = $this->client->request('GET', env('APP_URL') . '/api/entities', [
            'headers' => [
                'authorization' => 'Bearer ' . $this->token
            ]
        ]);
        $content        = json_decode($response->getBody()->getContents());

        $this->assertObjectHasAttribute('id', $content->data[0]);
    }

    /** @test */
    public function setNewEntity()
    {
        $name = $this->faker->name;

        $response = $this->client->request('POST', env('APP_URL') . '/api/entities', [
            'headers' => [
                'authorization' => 'Bearer ' . $this->token
            ],
            'form_params' => [
                'entity'     => $name
            ]
        ]);
        $content        = $response->getBody()->getContents();
        $jsonObject     = json_decode($content);
        
        $this->assertEquals($jsonObject->data->name, $name);
    }
}
